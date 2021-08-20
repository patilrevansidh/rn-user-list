import moment from 'moment';

const time = 'hh:mm A';
export function dateFormatter(date, format) {
  if (format) {
    return moment(date).format(format);
  }
  const diffDay = moment().diff(moment(date), 'day');
  if (diffDay == 1) {
    return `Yesterday, ${moment(date).format(time)}`;
  }
  if (diffDay > 1 && diffDay <= 6) {
    return `${diffDay} days ago`;
  }
  if (diffDay > 6) {
    return moment(date).format('MMM d, YYYY');
  }
}
