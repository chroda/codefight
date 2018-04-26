function makeArrayConsecutive2(statues) {
   let quantity = statues.length;
   let majorSize = Math.max(...statues);
   let minorSize = Math.min(...statues);
   return majorSize - quantity - minorSize;
}
