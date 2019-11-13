/**
 * This is a FUNCTION FACTORY that returns another function.
 * This FUNCTION FACTORY uses the concept of a CLOSURE.
 *
 * initSportsScorer is the OUTER FUNCTION.
 * It receives pts, but then immediately discards its reference to pts.
 * Pts remains reference by the INNER FUNCTION - this is example of CLOSURE.
 * A variable loses reference from the original function but
 * has become 'enclosed' with a reference to the INNER FUNCTION.
 */
function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointers = initSportsScorer(3);
console.log(threePointers(99));
/**
 * function (score) {
 *  return score + 3;
 * }
 */

const touchdown = initSportsScorer(6);
console.log(touchdown(14));
/**
 * function (score) {
 *  return score + 7;
 * }
 */

const xtraPt = initSportsScorer(1);
console.log(xtraPt(13));
