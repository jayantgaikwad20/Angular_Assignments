function Calculate(num1,num2,op)
{
    if(op.charAt(0)=='+')
    {
        return num1+num2;
    }
    else if(op.charAt(0)=='-')
    {
        return num1-num2;
    }
    else if(op.charAt(0)=='*')
    {
        return num1*num2;
    }
    else if(op.charAt(0)=='/')
    {
        return num1/num2;
    }
    else
    {
        return "Invalid";
    }
}


console.log(Calculate(30,10,'-'));
console.log(Calculate(30,13,'*'));
console.log(Calculate(30,12,'/'));
console.log(Calculate(30,11,'+'));
