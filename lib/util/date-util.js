/**@desc 日期相关操作的封装
 */
const DateUtil = {
  parse: function (str) {
    var date = null;
    try {
      date = new Date(str);
    } catch (e) {
      date = null;
    }
    return date;
  },
  format: function (date, format) {
    if (!date) {
      return '';
    }
    if (typeof (date) == 'string') {
      date = new Date(date);
    } else if (typeof (date) == 'object') {
      if (!(date instanceof Date)) {
        return '';
      }
    }
    format = format || 'yyyy-MM-dd HH:mm:ss';
    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "H+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  },
  addDay: function (date, day) {
    return DateUtil.addHour(date, 24);
  },
  addHour: function (date, hour) {
    return DateUtil.addMinute(date, hour * 60);
  },
  addMinute: function (date, minute) {
    return DateUtil.addSecond(date, minute * 60);
  },
  addSecond: function (date, second) {
    return DateUtil.addTime(date, second * 1000);
  },
  addTime: function (date, addTime) {
    var time = date.getTime() + addTime;
    date.setTime(time);
    return date;
  },
  /**
   * 日期相减
   * @param  {String} dayStart [description]
   * @param  {String} dayEnd   [description]
   * @param  {String} type     支持ms:毫秒,s:秒,m:分,H:时,d:天
   * @return {Int}          [description]
   */
  subDate: function (dayStart, dayEnd, type) {
    dayStart = new Date(dayStart);
    dayEnd = new Date(dayEnd);

    var ms = dayStart - dayEnd;
    var unit = 0;

    if (type == 'ms') {
      unit = 1;
    } else if (type == 's') {
      unit = 1000;
    } else if (type == 'm') {
      unit = 1000 * 60;
    } else if (type == 'H') {
      unit = 1000 * 60 * 60
    } else if (type == 'd') {
      unit = 1000 * 60 * 60 * 24;
    }

    if (unit) {
      return ms / unit;
    }
    return 0;
  },
  minDate: function () {
    var mm = this.mmDate.apply(this, arguments);

    return mm.min;
  },
  maxDate: function () {
    var mm = this.mmDate.apply(this, arguments);

    return mm.max;
  },
  mmDate: function () {
    var min = null;
    var max = null;

    for (var i = 0, len = arguments.length; i < len; i++) {
      var item = arguments[i];
      item = new Date(item);

      if (min) {
        min = min > item ? item : min;
      } else {
        min = item;
      }

      if (max) {
        max = max < item ? item : max;
      } else {
        max = item;
      }
    }

    return {
      min: min,
      max: max
    }
  }
};

export default DateUtil;
