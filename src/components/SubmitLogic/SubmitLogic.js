import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class SubmitLogic extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            title : props.title,
            list : props.list,
            inputNumber: 0, 
        };

        // this.onClick = this.onClick.bind(this);
    }

    wait4Click(title, list){
        
        console.log('card title', title );
        console.log('card list', list);
        
    }
    
    prevent(e){
        e.preventDefault();
        this.setState({inputNumber : 56});

        console.log(this.state.title);
        console.log(this.state.list);
        
        console.log(this.state.inputNumber);

        let tempCount = this.refs.WeightInput;
        console.log('num', tempCount);
    }

    handleClick (title, list) {
        
        console.log('Submit button clicked *********************************');
        // console.log(title);
        // console.log(list);

        // let tempId = title + "Input";
        // let inputCount = this.refs.
        
        let tempCount = this.refs.WeightInput;
        console.log('num', tempCount);
        // let tempUnit = this.refs.;
        

    }

    render(){
        return (    
            
            <Button 
                className='ml-4' 
                variant="success"
                onClick = {
                    // this.handleClick(this.state.title, this.state.list)

                    // binding this to access state
                    this.prevent.bind(this)
                } 
                id={(this.state.title + 'Submit')}
                >Submit

            </Button>

        );
    }
}

export default SubmitLogic;


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