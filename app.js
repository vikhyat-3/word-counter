let t=document.querySelector("#txt");
let d=document.getElementById("display");
let cur_display;
let keywords={};
let common=["this","that","he","she","her","him","a","i","his","they","them","with","it","in","for","of","the","an","it's","to","which","whose","are","am","whom","or","and","but","is","who","you","how",'from',"will","do","has","we","their","theirs","so","by"];
let keysSorted,printing_keywords=[];
let button=document.querySelector("#Submit");
button.addEventListener("click",function(){
    keywords={};
    printing_keywords=[];
    keysSorted=[];
    const info =new String(t.value);
    const words=count_words(info);
    const charac=count_charac(info);
    const charac_without_space=count_charac_wo_space(info);
    const sentence=count_sentences(info);
    keysSorted=count_keywords(info);
    console.log(keysSorted);
    printing_keywords=print_keywords(keysSorted,words);
    cur_display="Word Counter:\nWords: "+words+"\n"+"Characters(with space): "+charac+"\n"+"Characters(no space): "+charac_without_space+"\nNo. of sentences: "+sentence+"\nKeywords:\n "+(printing_keywords.join(", "));
    d.innerText=cur_display;
})
/*function count_keywords(str){
    if(str=="")
        return 0;
    str=str.replaceAll("\n"," ");
    str=str.replaceAll("."," ");    
    str.replaceAll(","," ")
    str=str.split(" ");
    str=str.filter(function(x){
        return x!=='';
    });
    console.log(str);
    for(i in str)
    {
        var find=0;
        console.log(str[i]);
        for(var a of keywords)
        {   
            console.log("IN IN LOOP");
            if(str[i].toLowerCase()==a["words"])
            {
                a["count"]++;
                find=1;
                break;
            }
        }
        if(find===0)
           keywords.push({"words":str[i].toLowerCase(),"count":1});
    }
}*/
function count_keywords(str){
    if(str=="")
        return 0;
    str=str.replaceAll("\n"," ");
    str=str.replaceAll("."," ");    
    str=str.replaceAll(","," ")
    str=str.split(" ");
    str=str.filter(function(x){
        return x!=='';
    });
    console.log(str);
    for(i in str){
        var temp=str[i].toLowerCase();
        if(keywords[temp]===undefined)
            keywords[temp]=1;
        else
            keywords[temp]++;
    }
    console.log(keywords);
    var keysSorted = Object.keys(keywords).sort(function(a,b){return keywords[b]-keywords[a]});
    return (keysSorted);

}
function print_keywords(a,l){
    console.log("in print");
    var i=1,index=0;
    var upper=parseInt((l/50)+1);
    console.log(upper,l)
    for(;i<=upper;i++)
    {
        if(common.includes(a[index])==true)
        { 
               index++;
               i--;
               console.log("incremented index")
        }
        else
        {
            printing_keywords.push(a[index]);
            console.log(a[index++]);
        }
    }
    return printing_keywords;
    console.log("ended");
}
function count_words(str){
    if(str=="")
        return 0;
    str=str.replaceAll("\n"," ");
    str=str.replaceAll("."," ");
    str=str.split(" ");
    str=str.filter(function(x){
        return x!=='';
    });
    return str.length;
}
function count_charac(str){
    
    str=str.trim();
    str=str.split("\n");
    for(var i=0;i<str.length;i++)
        str[i]=str[i].trim();
    str=str.join("");
    return (str.length);
}
function count_charac_wo_space(str){
    str=str.trim();
    str=str.split("\n");
    for(var i=0;i<str.length;i++)
        str[i]=str[i].trim();
    str=str.join("");
    str=str.replaceAll(" ","");
    return str.length;
}
function count_sentences(str){
    str=str.trim();
    str=str.replaceAll("\n",".")
    str=str.split(".")
    for(var i=0;i<str.length;i++)
        str[i]=str[i].trim();
    str=str.filter(function(x){
        return x!=='';
    });
    console.log(str);
    return (str.length);
}
