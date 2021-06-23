
    class Form{
        constructor(){
           
           this.button1 = createButton('pong AI');
           this.button2 = createButton('pong Friend');
           this.button3 = createButton('Breakout AI');
           this.button4 = createButton('Breakout Friend');
           
           this.title = createElement('h2');
            
        }
        
        display() {
            this.title.html("Choose the game you want to play");
            this.title.position(150, 50);
            this.title.style('font-size', '70px');
            this.title.style('color', 'skyblue');
            
            this.button1.position(450,300);
            this.button1.style('width', '200px');
            this.button1.style('height', '40px');
            this.button1.style('background', 'lightpink');
            this.button2.position(750, 300);
            this.button2.style('width', '200px');
            this.button2.style('height', '40px');
            this.button2.style('background', 'lightpink');
            this.button3.position(450,500)
            this.button3.style('width', '200px');
            this.button3.style('height', '40px');
            this.button3.style('background', 'lightpink');
            this.button4.position(750,500)
            this.button4.style('width', '200px');
            this.button4.style('height', '40px');
            this.button4.style('background', 'lightpink');
            function hide() {
            
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
                
                this.title.hide();
            
            }
            this.button1.mousePressed(() => {
                this.title.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
                gameState=1;
               
            });
    
            this.button2.mousePressed(() => {
                this.title.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
               gameState=2;
               
            });
            this.button3.mousePressed(() => {
                this.title.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
               gameState=3;
               
            });
            this.button4.mousePressed(() => {
                this.title.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
               gameState=4;
               
            });
    
        }
    }
