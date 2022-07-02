var flag=true;
var states=[1,0,1,0,1,0,0,1,0];
var winnerDiv=document.querySelector("#winner");
document.querySelector(".container").addEventListener('click',function(e){
   if(e.target.id)
    setVal(e.target);
})


function setVal(curDiv)
{
    id=curDiv.id;
    if(flag)
    {
        if(states[id]==1 || states[id]==0)
        {
            curDiv.innerHTML='X';
            states[id]='X';
            flag=!flag;
        }

    }
    else
    {
        if(states[id]==1 || states[id]==0)
        {
            curDiv.innerHTML='O';
            states[id]='O';
            flag=!flag;
        }
    }
    checkWinner(!flag);
    
    
}

function setDisable()
{
    for(let i=0;i<states.length;i++)
    {
        if(states[i]==0 || states[i]==1)
        {
            states[i]=null;
        }
    }
}
function checkWinner(type)
{
    if((states[0]==states[1] && states[1]==states[2]) ||(states[3]==states[4] && states[4]==states[5])||(states[6]==states[7] && states[7]==states[8]))
    {
        
        winnerDiv.innerHTML=type?"Winner X ":"winner O";
        setDisable();
    }
    else if((states[0]==states[3] && states[3]==states[6]) ||(states[1]==states[4] && states[4]==states[7])||(states[2]==states[5] && states[5]==states[8]))
    {
        winnerDiv.innerHTML=type?"Winner X":"winner O";
        setDisable();
    }
    else if((states[0]==states[4] && states[4]==states[8]) ||(states[2]==states[4] && states[4]==states[6]))
    {
        winnerDiv.innerHTML=type?"Winner X":"winner O";
        setDisable();
    }
}