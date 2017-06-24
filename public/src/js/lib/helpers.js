module.exports = {

    // Takes a date object outputs object of
    // date: DD/MM/YYYY
    // time: HH:MM
    getFormattedDate: function(date) {

        var month = date.getMonth() + 1 
        var day = date.getDate() 
        var year = date.getFullYear() 
        
        var hours = date.getHours()
        var minutes = date.getMinutes()

        if(String(month).length < 2) month = '0' + month 
        if(String(day).length < 2) day = '0' + day 
        if(String(hours).length < 2) hours = '0' + hours 
        if(String(minutes).length < 2) minutes = '0' + minutes

        console.log(String(minutes).length)

        const dateAsString = [day, month, year].join('/')
        const timeAsString = [hours, minutes].join(':')

        return {
            date: dateAsString,
            time: timeAsString,
        }
    },

    commafy: function(number, decimals, dec_point, thousands_sep) {
        var n = !isFinite(+number) ? 0 : +number, 
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                toFixedFix = function (n, prec) {
                    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                    var k = Math.pow(10, prec);
                    return Math.round(n * k) / k;
                },
                s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
    }
}