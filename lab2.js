const makeSubarrays = (...channel) => {
   return channel.slice().reduce((acc, item, index) => {
      if (index < acc.flat().length || index === channel.length - 1) {
         return acc;
      }
      acc.push(channel.slice(index, index + item + 1));
      return acc;
   }, []).map((item) => {
      item.shift();
      return item;
   });
}


console.log(makeSubarrays(4, 4, 0, 2, 0, 1, 2, 3, 4, 5, 1, 2, 14, 15, 3, 2, 1, 16, 1, 1, 177));	//[[4,0,2,0],[2],[4,5,1],[14,15],[2,1,16],[1]]

console.log(makeSubarrays(4, 4, 0, 2, 0, 1, 2, 3, 4, 5, 1, 2, 14, 15, 3, 2, 1, 16, 1, 1)); //[[4,0,2,0],[2],[4,5,1],[14,15],[2,1,16],[1]]

console.log(makeSubarrays(3, 4, 0, 2, 1, 2, 2, 4, 5));	// [[4,0,2],[2],[4,5]]

console.log(makeSubarrays(3, 4, 0, 2));	// [[4,0,2]]

console.log(makeSubarrays(3, 4, 0)); // [[4,0]]

console.log(makeSubarrays(1, 122)); // [[122]]

console.log(makeSubarrays(9)); // []