/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function cntRbt(arr) {
  let count = 0;
  for (let i of arr) {
    if (i == "R") { count++ }
  }
  return count;
}
