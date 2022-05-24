/* 
Notes by PRANAV VYAS:






console.log("Used to throw ")









JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  
<!-- const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return
<!-- () => (new in ECMAScript 6) -->


JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


assigning variable names:
var x=25;
var y="PQRST"


*/
var age=775;
console.time('mycodetook')//---------------------------------------------------------------------------
console.log("Hello I am Pranav");   //                                                                |_____________Time to run this much code
console.table({Name:"Pranav",surname:"Vyas",Age:18});//used to display object in the console          |
console.assert(age<189, 'This is not possible')  //checks condition....if false throws error statement|
//...                                                                                                 |
console.timeEnd('mycodetook');//-----------------------------------------------------------------------
console.error("This is an error");

var x="Pranav ";
var y=" Vyas";
console.log(x+y)
let p = null;
console.log("The data type of "+ p +" is "+ typeof p);
let q=[1,2,3,false,"Pranav"];
console.log("The data type of "+q+" is "+ typeof q);



let studentmarks=
{
    pranav: 20,
    xyz : 45,
}        
console.log(studentmarks);

let pqrst=1;
let ar=true;
let qv=Number(ar);
console.log(qv+" "+typeof qv);


let mno=false;
let salah=Number(mno);
console.log(salah+" "+typeof salah);


let letsSeeTodaysDateandTime= new Date();
console.log(letsSeeTodaysDateandTime);       //can be used to display the current time

let otp=49;
let sqrt="44563"
console.log(otp+sqrt,typeof (otp+sqrt));

/*
Variables in javascript:

    VAR HAS A FUNCTION LEVEL SCOPE WHEREAS LET HAS A BLOCK LEVEL SCOPE....
    It is adviced to use let rather than var...


    Constant:
        Constant objects:

        const obj= {
            player: "Rick",
            exp: 100,       //we cannot assign this object another value like obj=5 or something but we can change the values of the properties of this object
            lev: 24
        }
        Eg: 
            obj=7                 ❌(not allowed)
            obj.player="Morty"   ✅(allowed)



            

    3 ways to introduce variables in JS: let const var
    var x = "PV";   w
    var y = 75;

    const x = 75; we can't change const;
    However in const arrays...
    We can push and pop elements 

    
    let:  //it is considered to be a local block level variable
    var city = "Delhi"
    var x;
    if(x>11)
    {
        let city = "Mumbai";
        console.log(city);  //will print Mumbai if x>11
    }
    console.log(city) //will print Delhi because it is global
    


*/








/* 
Datatypes in Js
1)  Primitive data types: Memory is allocated in stack
    Strings,number(both integer and float),Boolean,null,undefined,symbols
    a)  String: can be introduced in both single and double and single quotes . They can be concatinated. Eg: 'Pranav '+'Vyas'= 'Pranav Vyas'


        Using the 'typeof' function. It can be used to determine the data type of the variable.
        Eg: let x=44;
            console.log(typeof x);  ----> displays 'integer' 


    b) null datatype: Returns a bogus value and displays object.

    c) undefined: Only declaring variables and not initializing them.


2) Reference data types: Memory is allocated in heap.
    Arrays: Data type is object
    object literals: Data type is object
    functions:Data type is function
    dates:Data type is object

    a)  Arrays: 
        let myarr=[2,3,4,5,6];
        console.log(typeof myarr) ---->displays the data type as object no matter whatever elements are passed;

    b)  Object literals: Data type is object
        let studentmarks=
        {
            pranav: 20,         ****NOTE: Always put comma...not semicolon*****
            xyz : 45,
        }
        console.log(studentmarks);
    
    c) Functions:
            function name(parameters)                           ------>data type of a function is a function. Not object
            {

            }

    
    d) Date: 
            let date= new Date();
            console.log(typeof date);                           ------>data type of date is object.....

            4 ways to create a new date object;

            1) new Date();
               let varname=new Date();
               console.log(varname);
               console.log(varname.localeString())  //to get correct time
               console.log(varname.toString())      //to get correct time
               console.log(Date.now())              //number of miliseconds passed since 1st Jan 1970
               
            2)let pv=new Date(year,month,date,hours,minute,seconds,miliseconds);
                //months are zero based in JS. jan=0;feb=1;.....
                //it is necessery to at least enter year and month as the arguments
            3)let xyz=new Date(enter_number_of_miliseconds);
              console.log(xyz.toLocaleString());
                //this method counts the number of miliseconds since Jan 1 1970 and returns the date accordingly

            4)let lmn=new Date("October 13, 2015 11:23:42");
            
            How to extract date :
                let var1 = new Date();
                console.log(var1.getFullYear());
                console.log(var1.getMonth());
                console.log(var1.getDate());
                console.log(var1.getDay());

            How to set date:
                let var1=new Date();
                var1.setFullYear(2021);
                var1.setMonth(6);
                var1.setDate(16);
                console.log(var1.toLocaleString());

            How to get Time:
                let var1 = new Date();
                console.log(var1.getTime());      //Returns the number of miliseconds passed since jan1 1970
                console.log(var1.getHours());
                console.log(var1.getMinutes());
                console.log(var1.getSeconds());
                console.log(var1.getMilliseconds());

            How to set Time:
                let var1= new Date();
                console.log(var1.setHours(21));
                console.log(var1.setMinutes(12));
                console.log(var1.setSeconds(23));
                console.log(var1.setMilliseconds(54));

*/

 








/*
Type conversion in JS:

converting number to string--->
let var=34;
let x = String(var);

using the ".toString()" function..
----> let i=8;
      console.log(i.toString());


converting boolean to number--->//True gets converted to 1 & false gets converted to 0
let ar=true;
let qv=Number(ar);
console.log(qv+" "+typeof qv);

let mo=false;
let salah=Number(mo);
console.log(salah+" "+typeof salah);



parseInt()
parseFloat()
let n='34.764'----->string
let h=parseInt(n)------>gets converted to 34 i.e an integer
let i=patseFloat(n)----->gets converted to float.


.tofixed() function : 
syntax--->varname.tofixed(number_of_integerPlaces)
let p=34.5674
console.log(p.tofixed(2))  ==displays 34.56
*/



/* Type coercion==>

let x='234'
let y=554
console.log(x+y)   //JS always concatinates string first and then number
            therefore output is 234554 which is a string




*/







 

/*
Strings: Properties, Methods & Template Literals
1)  Strings can be appended by adding words at end 
    for example: stringname.concat("HELLO"," ADD THIS TO THE STRING");---->this adds the words to end of string

2)  The index of a character can be found by 
            a) stringname.indexOf('prints the first occurence of the char to be tested')
            b) stringname.lastIndexOf('prints the index of last occurence of the char to be tested')
            
3) To check if a string ends with a particular character
        stringname.endsWith('string end to be tested')

4) To check if a particular character/sub-string exists in the original string:
        stringname.includes('sub-string to be tested')


5) To switch case in string:   
        stringname.toLowerCase()
        stringname.toUpperCase()
        
6)  To get the substring from index i to index j:
        stringname.substring(i,j)

7)  To slice the substring:
        stringname.slice(i,j)

8)  The concept of delimiters in JS can be performed using split function
            eg:My Name Is Pranav
        stringname.split(' ') =====> this will give us an array of the form :My|Name|Is|Pranav
        
9)  replacement of the first occurence of a string/char
        stringname.replace('to be  replaced','replaced by')

10) length of string:
            let p = "jefwhhfwihhh";
            let x = p.length            //attribute not a function

11) To check if a string includes a particular character:
            let x="Pranav";
            x.includes('a')     //returns true

TEMPLATE LITERALS:
let fruit1 = 'Orange';
let fruit2 = 'Apples';
let mynameis= 'Pranav';

let varx = `Hello My name is <h1>${mynameis}</h1> and I like ${fruit1} and ${fruit2}`
document.body.innerHTML=varx;


*/










/*
Arrays and objects: 
To append array:
        arrname.push(ElementToBePushed)
To add element at the beginning:
        arrname.unshift(ElementToBeAddedFirst)


To delete element from end:
        arrname.pop();
To delete element from beginning:
        arrname.shift();


Splicing an array:
        It removes y number of elements starting from index x includeing x;
        arrname.splice(x{StartingIndex},y{NumberOfElementsToBeRemoved});
    
Reversing an array:
       arrname.reverse() 

concating arrays:
            arr1=[];
            arr2=[];
            arr3=arr1.concat(arr2)

To check if an array includes a particular element:
            arr.includes('element name')        //returns true or false
Objects:
    myobj={
        name:'Pranav',
        roll:24,
        boolval:true,
        arr:[23,54,76],
    }       

    To access any particular value of a key of the object 
    |myobj.keyname| or |myobj['keyname']|

    Functions inside Objects:

    myobj={
        name: "Pranav",
        age:18,
        city: "Navi Mumbai",
        display: function()
        {
            console.log("Hey it's me!😎");
        }
    }
    myobj.display();



OBJECT CREATION:
    Ways of creating objs:
        1)
            let car = 
            {
                name: "Maruti 800",
                topSpeed: 89,
                run: function() 
                {
                    console.log("car is running");
                }
            };

        2)
                function GeneralCar(givenName, givenSpeed) 
                {
                    this.name = givenName;
                    this.topSpeed = givenSpeed;
                    this.run = function() 
                    {
                        console.log(`${this.name} Is Running`);
                    };
                    this.analyze = function() 
                    {
                        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
                    };
                }
                car1 = new GeneralCar("Nissan", 180);
                car2 = new GeneralCar("Marutu Alto", 80);
                car3 = new GeneralCar("Mercedes", 200);
                console.log(car1, car2, car3);


        3)
                let x=new Object();
                x.class=12;
                x.section='A';
                x.school="DAV INT SCHOOL";

        4)   
                let x= "First Name";
                let y="Age";
                let z="standard";
                let obj= {
                    [x]: "Pranav",
                    [y]: 18,
                    [z]: "2nd Year"
                }


PROPERTIES OF OBJECTS:
    
To give properties and values........
        let x="Simon";
        let y="Age";
        let z=20;
        let obj={
            x:x,
            y:y,                        //the resultant object will be: {x: 'Simon', y: 'Age', z: 20}
            z:z 
        }
If both properties and value are same:


*/









/*
Operators : 
    = assignment operator 
    == compares only value and not the data type
    === compares both the value and the data type
    != checks only value and data type 
    !==  checks both value and data type
    && operator
    || operator


    ternary operator:
    syntax: condition If true:If false

If else statements: 
    syntax: if(condition)
            {
                statement; 
            }
            else/else if
            {
                statement;
            }

For loop:
    for(let i=0;i<100;i++)
    {
        //statement to be executed
    }
While loop:
    while(j<10)
    {
        //statement to be executed
    }
do while:
    do
    {
        //statement to be executed
    }while(k<10)

To iterate through an array:
    let arr=[2,4,5,6,1,9]
    arr.forEach(function(element)
    {
        let x = elem
    }
    
    
Iterating through objects:
let obj={
    name:"Pranav",
    age:18,
    Hobby:"Programming", 
}
for(let x in obj)
{
    console.log(`The ${x} of the object is ${obj[x]}`);
}
*/







/*
Functions:
    syntax:
    function funcname(arguments)
    {
        blah blah blah
    }
    funcname(params)


    Return type:
    function funcname(arguments)
    {
        ....
    }
    let x = funcname(params)

Two ways to declare a function:
    1) Function declaration:
            function fname(args)
            {
                ----
                ----
                ----
            }

    
    2) Function Expression:
            var x = function(args)
            {
                ---
                ---
                ---
                ---
            }
            x(argument);    //function calling


ARROW FUNCTIONS: 
        printstuff = (pqrs) => console.log("String to be printed is: ",pqrs);
        printstuff("Pranav");



    Multiple Line arrow function:
            const whereAmI = (username, location) => 
            {
                if (username && location) 
                {
                    return "I am not lost";
                } 
                else 
                {
                    return "I am totally lost!";
                }
            }

    
    Arrow functions in objects:
            let obj={
                func:(name)=>{
                    console.log("Hello my name is "+name);
                }
            }


















/*
Document Object Modulation

let x = prompt("Enter user input/your name");
console.log("Your name is ${x}");


let y = confirm(`Is your name ${x} ?`)
console.log(y);         //If you click okay..it will print true or else it will print false

console.log(window.document) //will print head body etc etc.
--->To print inner and outer widths and heights:
console.log(window.innerHeight)
console.log(window.innerWidth) 

To check how much you have scrolled in x and y
console.log(scrollX);
console.log(scrollY);


location.href or location.toString() //typing this in console can give the webpage url
history.go(-1)   --->takes you to the previous webpage.
history.go(1)    --->takes you to the next webpage


document.all
document.body
document.forms
    {
        if you have more than 1 form we can select them by document.form[0/1/2....]

    }
document.images
document.scripts
document.links

*/










/*
single element selector:
    let element=document.getElementById(`IdName`)
       

    To display the class name of a particular element;
        console.log(element.className);

    To display child nodes
        console.log(element.childNodes);

    To display parent nodes
        console.log(element.parentNode);

    To change the text.... 
        element.innerText="Pranav Vyas"

    To change the HTML itself...
        element.innerHTML=`<h1>Changing the HTML</h1>`{don't forget the `..` inverted comma thingy...}

    To select a query/queryselector...
        Using ID: let x = document.querySelector(`#idname`);
        USing Class: let x=document.querySelector(`.classname`);
        To select any general tags like <B></B>,<h1></h1>: let x = document.querySelector(`tagname_eg:b  `);




    element_name.style.color = `green` or `blue`;





    Multi element selectors: Selects multiple elements

    To get elements with same class name:
        elem=document.getElementsByClassName(`class_name[0/1/2/3/4/5....]`);

    

        element.children and element.childnodes
        children----> does not count the occurences of comments and extra lines
        childnodes--> counts the occurences of comments and extra lines.
        













UDEMY COURSE DOM SELECTORS:
    getElementsByTagName:       selects an elements by Tag...like <h1> tag, <li> tag, <img> tag 
                                Syntax:     document.getELementsByTagName("h1");
                                Syntax:     document.getELementsByTagName("h1")[0,1,2...];    //to select one among multiple elements with same Tags like h1
    
    getElementsByClassName:     selects an elements by selecting class name....
                                Syntax:     document.getELementsByClassName("classname");
                                Syntax:     document.getELementsByClassName("classname")[0,1,2...];    //to select one among multiple elements with same Class Name


    getElementById:             selects an an element by Id.....
                                Syntax:     document.getELementsByTagName("Id");      
    








    querySelector:              Selects just the first query encountered in the dom....
                                Syntax:     document.querySelector("h1")  #for tags     //selects first element "h1" tag encountered
                                            document.querySelector(".c1")  #for classes //selects first element with the class name "c1"
                                            document.querySelector("#id1")  #for ids


    querySelectorAll:           Selects all the elements with the particular query
                                Syntax:     document.querySelectorAll("h1")[1];         //selects the second h1 tag encountered on the page
                                            document.querySelectorAll(".c1")[2];        //selects the third element with class name c1 encountered on the page
                                            document.querySelectorAll("#id");      //no point for using in ID because there is only one unique element with that id








    getAttribute:               Fetches the attribute of the particular element
                                Eg:
                                console.log(document.getElementsByClassName("c1").getAttribute("class")); //gets all the class names of the element with class name c1....


    setAttribute:               Selects the element and sets it's attribute....
                                Eg:
                                document.getElementsByClassName('c1').setAttribute("class","c2");       //replaces the class name c1 of the element and sets it to c2....## note that it doesn't add a new class c2....it just replaces the old class-name(c1) with a new class-name(c2).....


    style.{property}            ####  NOT RECOMMENDED
                                Eg:
                                document.querySelectorAll(".c2")[2].style.color="red";         //sets the text color as red for the eleement with class name c2



                                
    className:                  Adds class name to a particular element....we can't use querySelectorAll to add classnames to all the elements...we can add to only one element at a time
                                eg:
                                let x=document.querySelectorAll(".c2")[1];
                                x.className="classred";
                                                                //adds a class-name(classred) to the second element with class-name c2......




    classList:                  Suppose we have an element with multiple classes......this element returns all the class names 
                                It has the following properties:        
                                            1) classList.add("c1","c2"):  Adds one or more classnames to an element
                                            2) classList.remove("c1"):    Removes the particular class name....
                                                                            Eg:
                                                                                let x=document.getElementsByClassName("classname");
                                                                                x.classList.remove("classname");
                                            3) classList.toggle: Toggles the class name(adds classname when command typed...removes classname when command typed again....
                                                                                        adds classname when command typed...removes classname when command typed again....
                                                                                        adds classname when command typed...removes classname when command typed again....
                                                                                        adds classname when command typed...removes classname when command typed again....
                                                                                        ....
                                                                                        ....
                                                                                        ...)



    innerHTML:                  Changes the innerHTML of the element under consideration

    parentElement:              Gets the parent element of the element under consideration.... 
    
                                let x=document.getElementsByClassName("classname").parentElement;
                                console.log(x);
    
    children:               let x=document.getElementsByClassName("parentoflist")[1].parentElement.parentElement.children[2].children[3];
                                                                                    \------------| \-----------| \---------| \---------|
                                                                                     first parent      body        the 3nd     4th element
                                                                                    (i.e the list)                 child of    of the list
                                                                                                                   the body
                                                                                                                  (i.e) the 
                                                                                                                    list
                            console.log(x);
*/











/*  CREATING, REMOVING AND REPLACING ELEMENTS:
    CREATING ELEMS:
        let elem = document.createElement(`li`);
        elem.className = `class name`;
        elem.id = `id name`;
        elem.setAttribute(`title`,'title_name');


        To append the element into an element with classname as cl1;
        we first get the parent element;

        parent_elem= document.querySelector('li.classname_of_parent');
        parent_elem.appendChild(child_element);


        let text=document.createTextNode(`I am a text node`);
        You can append this to the parent element using 
        parent_elem.appendChild(text);



    REPLACING ELEMENTS:
        let elem2=document.createElement(`h3`);
        elem2.id = `idname`
        elem2.className = `classname`;
        let text=document.createTextNode(`Text node for elem2`);
        elem2.appendChild(text);

        element_to_be_replaced.replaceWith(elem2);



        To replace a child of id =`childid` within an parent_element of id=`parent` with a new child with id='new_replacement'
        parentelem.replaceChild(new_replacementelement,child_id_element);


    REMOVING ELEMENTS:
        parent_elem.removeChild(child_elem);
*/












/*
    EVENTS AND EVENT OBJECT:
    EVENT 1---->`Click`:
        syntax:
            document.getElementById(`idname`).addEventListener('eventname',function(){function to be performed})

        eg:
            document.getElementBYId(`idname`).addEvenListener
            (`click`,function(){
            location.href=`link of website to be visited`;
            })


        The function argument of the addEventListener can also have parameter e;
                document.getElementById('mychild2').addEventListener
                (
                    'click',function(e)
                    {
                        console.log(e);
                    }
                )
            'e' can have many attributes...one of the most important one out of the m is the target attribute which points to the element whose id is reffered to in the document.getElementById() function.
        

 
                console.log(e.target.className);
                console.log(e.target.id)
            }
        )


    EVENT 2--->double click:
        syntax:
            same syntax as click only instead of click= we use 'dblclick'

        
    To Prevent and bypass a default function ...we can use e.preventDefault();  


    MOUSE events:
            mousedown: 
            mouseup:
            mouseover: when cursor is moved inside the elem if earlier it was outside.
            mouseout:  when cursor is moved outside the elem if earlier it wwas inside.
            mousemove: when cursor is moved around the elem.

    offsetX,offsetY in js...
    To give cool background colours to the webpages...we can use this
    document.getElementById(`Id_name`).addEventListener('mousemove',func1)
    function func1(e)
    {
        document.body.style.backgroundColor=`rgb(${e.offsetX}.${e.offsetY},anynumber less than 220)`
    }





    Another Way to Add Events:
    <html>
    blah blah blah
    <body>
        blah blah blah
        <h1 class="thisshit" onclick="funcname()" onmouseover="func2()"></h1>
    </body>

            In JS file:
                function myfunc()
                {
                    console.log("Display this");
                }
                function func2()
                {
                    console.log("Show this");
                }
*/ 




/*
    Local Storage and Session Storage: Local storage stores data permanently
    In the console...if we go to applications,we can find key-value pairs under local storage


    Now to make key-value pairs under local storage we can use:
        window.localStorage.setItem(`var_name`,`var_value`);

    And to get that in a variable we can use:
        let var2=localStorage.getItem(`var_name`);

    To clear local complete storage:
        window.localStorage.clear()

    To clear a particular key-value pair:
        window.localStorage.removeItem(`varname`)


    JSON.stringify & JSON.parse:
        We cannot pass an array in the local storage...It is stored in the form of a string...so to store it as an array..we use these functions:
        For eg:
            let var1=[`Pranav`,19,99,`ManchesterUnited`];
            localStorage.setItem(`myvar`,JSON.stringify(var1));
            console.log(JSON.parse(localStorage.getItem(`var1`)))       

    
    SESSION STORAGE: Exactly Similar process to localstorage....just replace local with session....Session storage stores data temporarily....
                     As soon as the browser is closed ... the data is deleted
            
*/



/*
MATH OBJECTS:
    z=Math;
    z=Math.PI;     pi=3.14....
    z=Math.E;      prints value of e
    z=Math.round() rounds of the value
    z=Math.ceil()  ceiling function
    z=Math.floor();
    z=Math.abs();   absolute value
    z=Math.sqrt();  square root
    z=Math.pow(a,b);   a^b
    z=Math.min()    min 
    z=Math.max()    max
    z=Math.random()   any random number
        ---->z = x+(y-x)*Math.random()   random number between x and y
    
    To convert a random number generated by system to integer use floor or ceil function
    
    
*/

/*  OBJECTS IN JS:

*/      



/*
function mycar(carname,topspeed)
{
    this.name=carname;
    this.speed=topspeed;
    this.print=function()
    {
        console.log("Topspeed of ${this.name} is ${speed}");
    };
}
carobj=new mycar("Nissan",230);
*/




















/*

ADVANCED STUFF:

Advanced Functions:
            The program below contains a function x which accepts the age and has a 
            nested function y which uses both age and name as variables 
            
            let x=(age)=>
            {
                let name="Pranav Vyas";
                let y=()=>
                {
                    console.log("Hello "+name+"...your age is "+age);
                }
                y();
            }


Currying:
Currying a function is the process of converting a function that takes multiple arguments
and converts them to a process which takes them one at a time

Example:

    SYNTAX:
            /function definition:
                const x=>a()=>b()=>a*b
            function calling:
                x(7)(3);

    Example2:

            // The jpq function below takes two arguments a and b 
            // The calling of the function with one variable in the commented line below returns the function b
            // So the command jpq(7) returns the function b
            
            let jpq = (a)=>(b)=>
            {
                let r=a;
                let pqrs=a+r;
                let y=()=>
                {
                    console.log(pqrs);
                }
                y();
            }
            //jpq(7);       //returns the function b
            jpq(7)(5);

    Example3:
            let func=(p)=>(q)=>
            {
                let i=1;
                for(i=1;i<=q;i++)
                {
                    console.log(p*i);
                }
            }
            let multiplytillten=func(7);  //returns the function  q
            multiplytillten(10);
            
        

COMPOSURE
            let x=(f,g)=>(a)=>f(g(a));
            let sum=(num)=>num+1;
            x(sum,sum)(5);
            


    Example2:
            let x=(f,g)=>(a)=>
            {
                let p=Number(f(a));
                let q=g(a);
                console.log(p+q);
            }
            let sum=(num)=>num+1;
            let prod=(n)=>
            {
                let i=1;
                let fact=1;
                while(i!=(n+1))
                {
                    fact=fact*i;
                    i++;
                }    
                return fact;
            }
            x(prod,sum)(5);






































ADVANCED ARRAYS:  



        Enhanced for loop:
                let arr=[1,2,4,6,8];
                arr.forEach((elem)=>        //arrow function
                    {
                        let ind=arr.indexOf(elem);      //finding the index of the array   
                        arr[ind]=elem*10;       //updating the element at each elem
                    })
                arr;
                
//Map,Filter,Reduce:
        Map array: Mapping an array is putting elements into the array by returning the element:
        Example:
               let arr=[1,2,3,4];
               let arr2=arr.map((num)=>{
                   return elem*10;
               });
               arr2;                //[10,20,30,40]
        

        Filter array: Filters and returns elements of an array based on condition provided for filtering
        Example:
               let arr=[1,2,3,4];
               arr2=arr.filter((num)=>
               {
                   return num>4;  or
                   return num==4;
               })    
               arr2;                    //[6,8]   


        Reduce array: 

                let arr=[1,2,3,4];
                arr2=arr.reduce((acc,num)=>
                {
                    return acc+num;        //acc is a parameter which can be initialized accordingly
                },0);                      //initialization of acc












































ADVANCED OBJECTS
        1)  Reference types:
                If we create 2 objects like:
                obj1={
                    val1:10;
                }
                obj2=obj1;      //obj2 is not a separate object...It is just a reference to obj1
                                //whatever changes are made in obj1 will be reflected in obj2;

                No 2 objects can be same...example:
                obj1={val1:10};
                obj2={val1:10};     
                    //obj1 != obj2;

        2)  Context:
                this: this keyword returns the object of which it is a part


        3) Classes in Javascript:
                class Vehicle
                {
                    constructor(type,color)
                    {
                        this.type=type;
                        this.color=color;
                    }
                    disp()
                    {
                        console.log("I am the parent Class");
                    }
                }
                class Car extends Vehicle
                {
                    constructor(type,color,price)
                    { 
                        super(type,color);
                        this.price=price;
                    }
                    print()
                    {
                        console.log("I am child class");
                    }
                }
                let obj=new Car("Honda","Grey",70000);
                obj.disp();
                obj.print();

        4) Objects generally deal with pass by reference...
                This means that if we do something like:
                obj1={index:10};
                obj2=obj1
                any changes in either of the object is reflected in the other because both are a reference to the same object
                If we want obj1 and obj2 to refer to 2 different objects...we must create 2 different objects 

                The above stated rules are valid on arrays as well since they are object type;
    
                If we want to copy an array and pass by value...
                We can do it in the following 2 ways:

                1)  obj1={a:1,b:2,c:3};
                    obj2=Object.assign({},obj1);        //This creates 2 different memory spaces for the objects

                2)  obj1={a:1,b:2,c:3};
                    obj2={...obj1};  

                
*/






























/*

Ecma Script 7 --------------->

                1)  includes method: Used to check if a string/array contains the specified substring/character/array element or not
                    Example 1:
                        let x = "Pranav";
                        x.includes("ran")   -------> includes the given string so result will be true
                    
                    Example 2:
                        let arr=["pen","pencil","eraser","stapler"]
                        arr.includes("pen");                //true
                        arr.includes("crayons");            //false
                

*/



/*

Ecma Script 8 ------------->
                1)  Object.keys, Object.values, Object.entries
                    let obj=
                    {
                        name:"Pranav",
                        age:18,
                        gen:'M',
                        city:"Navi Mumbai"
                    }
                    
                Object.keys(obj)--->Used to iterate over an Object via the keys
                    Object.keys(x).forEach((keys)=>
                    {
                        console.log(keys+": "+x[keys]);                           
                    })

                Object.values(obj)---->Used to iterate over the object via values corresponding to the keys;
                    Object.values(x).forEach((value)=>
                    {
                        console.log(value);
                    }) 
                
                Object.entries ----> Used to fetch the keys and values of an object into an array
                    Object.entries(x).forEach((val)=>
                    {
                        console.log(value);
                    })

                    Example
                        let x={
                            name:"Pranav",
                            age:18,
                            city:"Kharghar",
                            sector:20
                        }
                        keys=[];
                        vals=[];
                        Object.entries(x).forEach((val)=>
                            {
                                let arr=val;
                                keys.push(arr[0]);
                                vals.push(arr[1]);
                            })
                        keys;
                        vals;
*/




/*
Ecma Script 10---------->

            flat()--->used on arrays;
                    let arr=[1,2,[3,4],5]
                    arr.flat(); -----> output is normal array

                    let x=[1,2,[4,[5,6,8]],10,12]
                    arr.flat(2) ---->returns normal array

            
            Object.fromEntries(arrayname)----> converts the contents of an array into obj
                        
                Example:
                    let x=[["name","Pranav"],["age",18],["city","Kharghar"]];
                    Object.fromEntries(x);
                     

*/











/*
            ADVANCED LOOPING TECHNIQUES:
                1) for of loop: Uses the principle of iterating...
                    Works on:
                    Arrays & Strings: ✔️
                    Objects: ❌  
                        let x=[12,51,123,139,54];
                        for(elem of x)
                        {
                            console.log(elem)       //output: 12,51,123,139,54
                        }        

                2) for in loop: Uses the principle of enumerating... 
                    Works with:
                    Objects ✔️ {Displays the properties and not their values}
                    Strings,Arrays✔️ {but displays the index rather than array elements}
                        let x={
                            name:"Pranav",
                            age:18,
                            city:"Kharghar",
                            sector:20
                        }
                        for(elem in x)
                        {
                            console.log(elem)       //output: name,age,city,sector...only properties get displayed...not values
                        }    
*/












































/*
                ES2020:
                    1)  BigInt: Very Very Big number....hehe

                    2) Optional Chaining Operator:   {?.}
                            Suppose we want to check if an object has a certain nested object
                            or a property....We can use optional chaining operator
                            If no such property is found....it displays "undefined"
                        
                        Eg: 
                            let x={
                                name:"Pranav",
                                age:19,
                                city:"Navi Mumbai",
                                college:"VIT"
                            }
                            let flag = x ?.name ;   //checks if x has a property called name..

                        
                    3) Nullish Coalescing Operator:  {??}
                
                    
                ES2021:
                    1) replaceAll : Method of the string which replaces all occurences of a string/character 
                        Eg:
                            Let str = "I am Pranav and Pranav likes chocolates";
                            let str2= str.replaceAll("Pranav","Human");
                                    //str remains the same...the replaced string is stored in str2
                    

                    2) replace: Method of the string which replaces the first occurence of a string/character
                    
*/