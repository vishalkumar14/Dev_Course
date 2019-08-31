var ladder = {

    step : 0,

    up : function(){
        this.step += 1;
        return this;
    },

    down : function(){
        this.step -= 1;
        return this;
    },

    showStep : function(){
        console.log(this.step);
    }

}

ladder.up().up().up().down().down().up().showStep();