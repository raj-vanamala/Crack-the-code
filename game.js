class Game {
    constructor(current_level,remaining_chances,chances,difficulty_level) {
        this.current_level=current_level;
        this.remaining_chances=remaining_chances;
        this.chances=chances;
        this.difficulty_level=difficulty_level;
        this.generated_number = 0;
        this.score=0;
    }
    set currentLevel(current_level){
        this.current_level=this.current_level+current_level;
    }
    get currentLevel(){
        return this.current_level;
    }
    set remainingChances(remaining_chances){
        this.remaining_chances=this.remaining_chances-remaining_chances;
    }
    get remainingChances(){
        return this.remaining_chances;
    }
    set difficultyLevel(difficulty_level){
        this.difficulty_level=this.difficulty_level+difficulty_level;
    }
    get difficultyLevel(){
        return this.difficulty_level;
    }
    get Number(){
        return this.generated_number;
    }
    generateNumber(){
        this.generated_number = Math.random()+1;
        console.log(this.generated_number);
        for(let index = 0;index<(this.current_level);index++){
            this.generated_number*=10;
        }
        console.log(this.generated_number);
        this.generated_number=Math.floor(this.generated_number*100);
        console.log(this.generated_number);
    }
    numberComparison(input_value,generated_value){
        let access_id = String(this.remainingChances) + String(this.difficultyLevel);
        console.log(String(input_value).length);
        let result = 0;
        let temp1 = String(input_value).split("")
        let temp2 = String(generated_value).split("")
        for(let index=0;index<this.difficultyLevel;index++){
            let id1 = index+1;
            if(temp1[index] == temp2[index]){
                let element = document.getElementById(`${access_id + index1}`);
                element.innerHTML = temp1[index];
                element.style.backgroundColor='green'
                result=result+1
            }
            else{
                for(let index2=index;index2<this.difficultyLevel;index2++){
                    if(temp1[index] == temp2[index2]){
                        let element = document.getElementById(`${access_id + index1}`);
                        element.innerHTML = temp1[index];
                        element.style.backgroundColor='orange';
                        result=result-1
                    }
                    else{
                        for(let index2=0;index2<this.difficultyLevel;index2++){
                            if(temp1[index] == temp2[index2]){
                                let element = document.getElementById(`${access_id + index1}`);
                                element.innerHTML = temp1[index];
                                element.style.backgroundColor='orange';
                                result=result-1
                                break;
                            }
                            else{
                                let element = document.getElementById(`${access_id + index1}`);
                                element.innerHTML = temp1[index];
                                element.style.backgroundColor='red';
                                result=result-1
                            }
                    }
                }
            }
        }
    }
    if(result == String(input_value).length){
        console.log('won');
        this.score = this.score  + this.remaining_chances * 10;
        console.log(this.score);
        currentLevel(1);
        difficultyLevel(1);
        alert(`Congratulations!! You have Cleared Level ${this.currentLevel}`);
        this.createNumberGrid();
    }
    else{
        remainingChances(1)
        if(this.remainingChances >0 ){
            alert(`You Lost The Chance`);
            this.score=0;
        }
        else{
            alert(`You Lost The Game`);
            this.score=0;
        }
    }
  }
  createGridDynamically(){
    let div3 = document.createElement('div');
    div3.setAttribute('class','flex-css2');
    let id = String(this.remainingChances) + String(this.difficultyLevel);
    for(let index1=0;index1<this.difficultyLevel;index1++){
        let div = document.createElement('div');
        div3.setAttribute('class','blocks-css');
        div3.setAttribute('id',`${id + index1}`);
        console.log(`${id + index1}`);
        div3.appendChild(div);
    }
    return div3;
  }
  createNumberGrid(){
      var div1 = document.createElement('div');
      div1.setAttribute('class','margin-css flex-css1');

      let div2 = document.createElement('div');
      div1.setAttribute('class','flex-css2');
      div1.appendChild(div2);

      let input1 = document.createElement('input');
      input1.setAttribute('type','text');
      input1.setAttribute('class','form-control input-css');
      input1.setAttribute('id','player_value');
      input1.setAttribute('placeholder','Enter Number')
      input1.setAttribute('value','')
      div2.appendChild(input1);

      let button1 = document.createElement('button');
      input1.setAttribute('type','button');
      input1.setAttribute('class','btn btn-outline-success');
      input1.setAttribute('id','button-addon2');
      input1.setAttribute('onclick','checkResult()')
      input1.innerHTML = 'Check Result';
      div2.appendChild(button1);


      for(let index1=0;index1<this.chances;index1++){   
        let number_grid = this.createGridDynamically();
        div1.appendChild(number_grid);     
    }
    console.log(div1);
    document.body.append(div1);
  }
}
  game = new Game(1,5,5,4);
  game.generateNumber();
  game.createNumberGrid();
  
  function checkResult(){
    let input_element = document.getElementById('player_value');
    let input_value = +input_element.value;
    game.numberComparison(input_value,game.Number);
  }