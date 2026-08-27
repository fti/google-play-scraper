const MAX_SUMMARY_LENGTH = 200;
const ELLIPSIS = '…';

/*
 * Search/list/similar cards only expose the full app description in the
 * page data, not a short blurb (that only exists on the app detail page).
 * Strip markup and cut it down to a short plain-text summary.
 */
function truncateSummary (text) {
  if (!text) {
    return text;
  }

  const plain = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  if (plain.length <= MAX_SUMMARY_LENGTH) {
    return plain;
  }

  const cut = plain.slice(0, MAX_SUMMARY_LENGTH).replace(/\s+\S*$/, '');
  return cut + ELLIPSIS;
}

export default truncateSummary;
