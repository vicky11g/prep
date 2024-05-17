export function dutch_flag_sort(balls) {
  let ri=0;
  let gi=0;
  let bi=balls.length-1;
  while(gi <= bi) {
      if(balls[gi]==='R') {
          swap(ri,gi,balls);
          ri++;
          gi++;
      } else if(balls[gi]==='B') {
          swap(gi,bi,balls);
          bi--;
      } else {
          gi++;
      }
      console.log(balls.join(','))
  }
  return balls;
}

const swap = (a,b,arr) => [arr[a],arr[b]]=[arr[b],arr[a]];