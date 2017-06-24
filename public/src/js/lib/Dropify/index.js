 require('../requestAnimationFrame')

var Dropify = function(minHeight, maxHeight) {
    this.startTime = 0
    this.requestId = null
    this.stopped = false
    this.maxHeight = maxHeight || 200
    this.minHeight = minHeight || 80
    this.inputNode = null // cache the input node

    this.runningAnimation = false
    this.currentNode = null

    this.fps = 120
}

Dropify.prototype.SlidePanel = function(event, shouldHidePanel, callback) {
    if(this.runningAnimation) {
        return 
    }

    this.runningAnimation = true

    // Incase another handler uses this we will update the inputNode cache on this instance
    let inputNode = event.target;
    if(inputNode !== this.inputNode) {
        this.inputNode = inputNode
    }

    // Get the parent of the current input node
    let parentNode = this.inputNode;
    if(parentNode) {
        while(parentNode && parentNode.className.indexOf('collapsable') < 0) {
            parentNode = parentNode.parentElement;
        }
    }

    parentNode.style.overflow = 'hidden'
    parentNode.style.minHeight = this.minHeight
    parentNode.style.maxHeight = this.maxHeight

    this.currentNode = parentNode

    if(shouldHidePanel) {
        this.Hide(() => {
            this.runningAnimation = false
            callback()
        })
    } else {
        this.Show(() => {
            this.runningAnimation = false
            callback()
        })
    }
}

Dropify.prototype.Show = function(cb) {
    setTimeout(function() {
        let boundingBox = this.currentNode.getBoundingClientRect()
        let height = parseInt(this.currentNode.style.height, 10)

        if(!height) {
            height = boundingBox.height - 20
        }

        if(height < this.maxHeight) {
            var newHeight = height+(this.minHeight/4)
            if(newHeight > this.maxHeight) newHeight = this.maxHeight
            this.currentNode.style.height = newHeight + 'px'
            window.requestAnimationFrame(this.Show.bind(this, cb))
        } else {
            cb()
        }
    }.bind(this), 1000 / this.fps)
}

Dropify.prototype.Hide = function(cb) {

    setTimeout(function() {
        let boundingBox = this.currentNode.getBoundingClientRect()
        let height = parseInt(this.currentNode.style.height, 10)

        if(!height) {
            height = boundingBox.height - 30
        }

        if(height > this.minHeight) {
            var newHeight = height-(this.minHeight/4)
            if(newHeight < this.minHeight) newHeight = this.minHeight
            this.currentNode.style.height = newHeight + 'px'
            window.requestAnimationFrame(this.Hide.bind(this, cb))
        } else {
            return cb()
        }
    }.bind(this), 1000 / this.fps)
}

module.exports = Dropify