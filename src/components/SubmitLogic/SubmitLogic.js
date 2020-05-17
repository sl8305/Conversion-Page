import React from 'react';
import Button from 'react-bootstrap/Button';


// function calcResult(count, unit) {
//     var endResult = 0; 
//     var list = [];
//     if (lengthUnitList.contain(unit)) {
//       list = lengthList;
//     } 
//     // else if (volumeUnitList.contain(unit)) {
      
  
//     // }
  
//     var input = {'count' : count, 'unit' : unit};
//       for (var i =0; i < list.length; i++) {
//         var listItem = list[i];
//         if (listItem.Imperial.unit.equals(input.unit) || listItem.Metric.unit.equals(input.unit)){
//           endResult = conversion (listItem.Imperial, listItem.Metric, input);
//           break; 
//         }
//       }
//     return endResult;
//   }
  
//   function conversion(Imperial, Metric, input) {
//     var result = 0;
//     if (Imperial.unit.equals(input.unit)) {
//       result = (input.count / Imperial.count) * Metric.count;
//     } else if (Metric.unit.equals(input.unit)) {
//       result = (input.count / Metric.count) * Imperial.count;
//     }
  
//     return result;
//   }
  
//   var volumeUnitList = [];


const SubmitLogic = (props)=> {
    return (
        <Button className='ml-4' variant="success">Submit</Button>

    );
}

export default SubmitLogic;