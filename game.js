let div = document.createElement('div');
document.body.appendChild(div);
class Game {
    constructor(current_level,remaining_chances,chances,difficulty_level) {

        this.current_level=current_level;

        this.remaining_chances=remaining_chances;

        this.chances=chances;

        this.difficulty_level=difficulty_level;

        this.generated_number = 0;

        this.score=0;

        this.current_chance = 1;

        this.level_wise_score = [];

    }
    set currentLevel(current_level) {

        this.current_level=this.current_level+current_level;

    }
    get currentLevel() {

        return this.current_level;

    }
    set remainingChances(remaining_chances) {

        this.remaining_chances=remaining_chances;

    }
    get remainingChances() {

        return this.remaining_chances;

    }
    set difficultyLevel(difficulty_level) {

        this.difficulty_level = this.difficulty_level + difficulty_level;

    }
    get difficultyLevel() {

        return this.difficulty_level;

    }
    set currentChance(current_chance) {

        this.current_chance = this.current_chance + current_chance;

    }
    get currentChance() {

        return this.current_chance;

    }
    get Number() {

        return this.generated_number;

    }
    createNumberGrid() {
      
      let div00 = document.createElement('div');
      div00.setAttribute('class','header-css');
      div00.setAttribute('style','font-size: 70px');
      div00.setAttribute('id','title');
      div00.innerHTML = "Crack The Code"
      document.body.appendChild(div00);

      let div0 = document.createElement('div');
    
      let div1 = document.createElement('div');
      div1.setAttribute('class','margin-css flex-css1');
      div1.setAttribute('id','game-grid');
      div0.appendChild(div1)
      
      let div2 = document.createElement('div');
      div2.setAttribute('class','flex-css2');
      div1.appendChild(div2);
  
      let input1 = document.createElement('input');
      input1.setAttribute('type','text');
      input1.setAttribute('class','form-control input-css');
      input1.setAttribute('id','player_value');
      input1.setAttribute('placeholder','Enter Number')
      input1.setAttribute('value','')
      div2.appendChild(input1);
  
      let button1 = document.createElement('button');
      button1.setAttribute('type','button');
      button1.setAttribute('class','btn btn-outline-success');
      button1.setAttribute('id','button-addon2');
      button1.setAttribute('onclick','checkResult()')
      button1.innerHTML = 'Check Result';
      div2.appendChild(button1);


  
      for(let index1=0;index1<this.chances;index1++){   
        let number_grid = this.createGridDynamically(index1,index1+1);
        div1.appendChild(number_grid);     
    }
    document.body.append(div0);
  }
  
    createGridDynamically(row,id1) {
      let div3 = document.createElement('div');
  
      div3.setAttribute('class','flex-css2');
      let id = String(row) + String(id1) + String(this.difficultyLevel);
      for(let index1=0;index1<this.difficultyLevel;index1++){
          let div4 = document.createElement('div');
          div4.setAttribute('class','blocks-css');
          div4.setAttribute('id',`${id + index1}`);
          div3.appendChild(div4);
      }
      return div3;
    }

    generateNumber() {
        this.generated_number = Math.random()+1;
        for(let index = 0;index<(this.current_level);index++){
            this.generated_number*=10;
        }
        this.generated_number=Math.floor(this.generated_number*100);
        this.generated_number = this.generateUniqueNumber(this.generated_number);
    }
    generateUniqueNumber(temp) {
        let d10 = [9,1,2,4,3,6,8,7,0,5]
        let rem2;
        let digits = [];
        let index = 0;
        while(temp>0) {
            rem2 = temp%10;
            digits[index++] = rem2;
            temp = Math.trunc( temp/10 );
        }
        let num = "";
        let set = new Set(digits);
        let loop = digits.length - set.size;
        for(let j = 0;j< loop;j++) {
            for(let i=0;i<d10.length;i++) {
                 let check_value = set.has(d10[i]);
                 if(check_value == false) {
                     set.add(d10[i]);
                     break;
                }
             }
        }
        for (let val of set) {
            num = num + val;
        }
        console.log(num);
        return num;
    }
    numberComparison(input_value,generated_value) {
        if(this.remainingChances > 0) {
            console.log('currentChance',this.currentChance);
            let access_id =  String(this.currentChance-1) + String(this.currentChance) + String(this.difficultyLevel);
        
        let temp1 = parseInt(input_value);
        temp1 = String(temp1).split("");

        let temp2 = String(generated_value).split("")
        let correct_digits = 0;

        let set = new Set(temp1);
        if(temp1.length != set.size || temp1.length < this.difficultyLevel || temp1.length > this.difficultyLevel) {
            let msg = 'Please Enter a Valid Unique Number Only';
            let class_name = `alert alert-danger message-box-css-v`;

            setTimeout(this.messageBox,0,msg,class_name);
            return;
        }

        for(let index=0;index<this.difficultyLevel;index++) {

            let element = document.getElementById(`${access_id + index}`);
            element.innerHTML = temp1[index];

            if(temp1[index] == temp2[index]){

                 element.style.backgroundColor='green';
                 correct_digits =correct_digits + 1;

            } else {

                let value_not_found = true;

                for(let index1=0;index1<this.difficultyLevel;index1++) {  

                    if(temp1[index] == temp2[index1]) { 

                        element.style.backgroundColor='orange';
                        value_not_found = false;
                        break;

                    } 
                }

                if(value_not_found)
                    element.style.backgroundColor='red';
            }
        }
        this.checkScore(correct_digits,temp2);
        }
  }

    checkScore(correct_digits,temp2) {

        let msg,class_name;

        if (correct_digits == temp2.length) {
            msg = `Congratulations!! You have Successfully Cleared Level ${this.currentLevel} ,Your Score is: `;
            class_name = 'alert alert-success message-box-css-v';
            this.calculateScore(msg,class_name);

            setTimeout(()=>{

                this.currentLevel = 1;
                this.difficultyLevel=1;

                let grid = document.getElementById('game-grid');
                let title = document.getElementById('title');

                msg = `Welcome To Level ${this.currentLevel}`;
                class_name = `alert alert-info message-box-css-v`;

                title.remove();
                grid.remove();

                this.currentChance = -this.currentChance+1;
                this.remainingChances = 5;

                this.generateNumber();
                this.createNumberGrid();

                this.messageBox(msg,class_name);
            },5100);

         } else {


             this.remainingChances = this.remainingChances - 1;
             this.currentChance = 1;

             console.log(this.remainingChances);

             if (this.remainingChances == 0) {

                msg = 'you lost the game';
                class_name = `alert alert-danger message-box-css-v`;

                this.calculateScore(msg,class_name);

                setTimeout(()=> {
                    window.location.replace('index.html');
                },4000);

             } else {

                msg = `you lost one chance`;
                class_name = `alert alert-danger message-box-css-v`;

                setTimeout(this.messageBox,1000,msg,class_name);
             }
         }

  }


  calculateScore(msg,class_name) {
      let final_score=0;
      this.level_wise_score[this.currentLevel] = this.remainingChances * 10 * this.currentLevel;
      for (let index = 1; index <=this.currentLevel; index++) {
          final_score = final_score + this.level_wise_score[index];
      }
      if(class_name == 'alert alert-success message-box-css-v')
            msg = msg + `${final_score}`;
      

    setTimeout(this.messageBox,1000,msg,class_name);
  }

  messageBox(msg,class_name) {

    div.setAttribute('id','message');
    div.setAttribute('class',`${class_name}`);
    div.setAttribute('role','alert');

    div.innerHTML = `${msg}`;

    setTimeout(()=>{

        div.setAttribute('class','alert alert-success message-box-css-h');

    },4000);

  }

}
  game = new Game(1,5,5,4);

  game.generateNumber();
  game.createNumberGrid();

  function checkResult(){
    let input_element = document.getElementById('player_value');
    let input_value = input_element.value;
    game.numberComparison(input_value,game.Number);
  }
