let button = document.getElementById("get-info-button");
let input = document.getElementById("repos-name-input");
let upper_menu_input = document.getElementById("upper-menu__input");
let theme_swap_button = document.getElementById("theme-swap");
let finding_repos_div = document.getElementById("finding-repos-div");
let body = document.getElementById("body");
let suggest_text = document.getElementById("suggest-text");
let repos_name_input = document.getElementById("repos-name-input");
let owner_link = document.getElementById("owner-link");
let repo_link = document.getElementById("repo-link");
let owner_link1 = document.getElementById("owner-link1");
let repo_link1 = document.getElementById("repo-link1");
let top_owners_text = document.getElementById("top-owners-text");
let top_repos_text = document.getElementById("top-repos-text");
let button1 = document.getElementById("upper-menu__just-button1");
let button2 = document.getElementById("upper-menu__just-button2");
let get_info_button = document.getElementById("get-info-button");
theme_swap_button.addEventListener("mousedown", InvertionTechnique_Red);               
button.addEventListener("mousedown", ShowInfo);
let just_button1 = document.getElementById("upper-menu__just-button1");
just_button1.addEventListener("mousedown", () => alert("это кнопка"));
let just_button2 = document.getElementById("upper-menu__just-button2");
just_button2.addEventListener("mousedown", () => alert("это тоже кнопка"));
let burger_button = document.getElementById("burger-button");
burger_button.addEventListener("mousedown", () => alert("TODO"));
async function GetReposList(){                    // получить данные и выдать ошибку в случае чего
    let responce = await fetch("https://api.github.com/users/" + input.value + "/repos", {method: "GET"});
    console.log(responce);
    if(responce.status >= 400){
        let repos_list = document.getElementById("repos-list");
        if(responce.status = 404){
            repos_list.innerHTML = "User not found";
        }
        else{
            repos_list.innerHTML = "Something goes wrong<br>" + responce.status + " " + responce.statusText;  
        }
        repos_list.className = "not-found-message";
        if(theme_swap_button.style.backgroundImage === "url(\"lunar.png\")"){
            repos_list.style.color = "#040507";
        }
        return false;
    }
    let a = await responce.json();
    return a;
}

async function ShowInfo(){                                    // сделать контейнеры по 3 в ряд
    let repos_array = await GetReposList();
    if(repos_array == false || repos_array == undefined){
        return;
    }
    let repos_list = document.getElementById("repos-list");
    repos_list.innerHTML = "";
    repos_list.className = "repos-list";
    if(repos_array.length === 0){
        repos_list.innerHTML = "Repositories not found";
        repos_list.className = "not-found-message";
        if(theme_swap_button.style.backgroundImage === "url(\"lunar.png\")"){
            repos_list.style.color = "#040507";
        }
        return;
    }
    else{
        for(let i = 0; i < repos_array.length; i += 3){
            let three_repos_container = document.createElement("div");
            three_repos_container.className = "three-repos-container";
            if(repos_array.length - i >= 3){
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i]));
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i + 1]));
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i + 2]));
            }
            else if (repos_array.length - i === 2){
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i]));
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i + 1]));
            }
            else if (repos_array.length - i === 1){
                three_repos_container.append(CreateRepoInfoContainer(repos_array[i]));
            }
            repos_list.append(three_repos_container);
            console.log(repos_array[i]);
        }
   }
}
function CreateRepoInfoContainer(repo_object){                                      // наполнить контейнеры информацией
            let repo = document.createElement("div");
            repo.className = "repo-info-container";
            let heading = document.createElement("div");
            heading.className = "repo-info__heading";
            let heading_name = document.createElement("a");
            heading_name.className = "heading-name";
            heading_name.innerHTML = PutBRS(repo_object.name);
            heading_name.href = "https://github.com/" + input.value + "/"+ repo_object.name; 
            let acsess_type = document.createElement("div");
            acsess_type.className = "acsess-type";
            repo_object.private
                ? acsess_type.innerHTML = "Private"
                : acsess_type.innerHTML = "Public"
            let lang_icon_and_name = document.createElement("div");
            lang_icon_and_name.className = "lang-icon-and-name";
            let circle = document.createElement("div");
            circle.className = "repo-info__lang-icon";
            circle.style.backgroundColor = DefineLangIconColor(repo_object);
            let lang_name = document.createElement("div");
            if(repo_object.language != undefined){
                lang_name.innerHTML = repo_object.language;
                lang_icon_and_name.append(circle);
            }    
            else{
                    lang_name.innerHTML = "This repository is empty";
            }
            lang_name.className = "repo-info__lang-name";
            let creation_time = document.createElement("div");
            creation_time.className = "creation-time";
            creation_time.innerHTML = "Created at " + DefineCreationTime(repo_object);
            let updation_time = document.createElement("div");
            updation_time.className = "updation-time";
            updation_time.innerHTML = "Updated on " + DefineUpdationTime(repo_object);
            heading.append(heading_name);
            heading.append(acsess_type);
            repo.append(heading);
            if(theme_swap_button.style.backgroundImage === "url(\"lunar.png\")"){
                creation_time.style.color = "#040507";
                updation_time.style.color = "#040507";
                lang_name.style.color = "#040507";
            }
            lang_icon_and_name.append(lang_name);
            repo.append(lang_icon_and_name);
            repo.append(creation_time);
            repo.append(updation_time);
            return repo;
}

function DefineLangIconColor(repo_object){                     // определить цвет для иконки языка , взято с гитхаба
    switch(repo_object.language){
        case "JavaScript":
            return "#f1e05a";
        case "Java":
            return "#b07219";
        case "Python":
            return "#3572A5";
        case "PHP":            
            return "#4F5D95";
       case "Ruby":
            return "#701516";
        case "Shell":
            return "#89e051";
        case "Swift":
            return "#ffac45";
        case "TypeScript":
            return "#2b7489";
        case "Perl":
            return "#0298c3";
        case "Pascal":           
            return "#E3F171";
        case "Lua":
            return "#000080";
        case "Go":
            return "#00ADD8";
        case "F#":
            return "#b845fc";
        case "C":
            return "#555555";
        case "C++":
            return "#f34b7d";
        case "C#":
            return "#178600";
        case "Assembly":
            return "#6E4C13";
        case "Ada":
            return "#02f88c";
        case "CSS":
            return "#563d7c";
        case "HTML":
            return "#e34c26";
        default:
            return "#814CCC";
    }
}
function DefineCreationTime(repo_object){                                  // получить дату в нужном формате
    let a = new Date(repo_object.created_at.substring(0, repo_object.created_at.indexOf("T")));
    let array_of_months = ["January", "February", "March", "April", "May", "June",
         "Jule", "August", "September", "October", "November", "December"];
    return array_of_months[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear(); 
}
function DefineUpdationTime(repo_object){
    let a = new Date(repo_object.created_at.substring(0, repo_object.updated_at.indexOf("T")));
    let array_of_months = ["January", "February", "March", "April", "May", "June",
         "Jule", "August", "September", "October", "November", "December"];
    return array_of_months[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear(); 
}
function PutBRS(string){                   // засунуть <br> в имя репозитроия через каждые 20 символов 
    for(var i = 1; i < string.length; i++){                    // (а вдруг он слишком длинный и не вместиться)
        if(i % 20 === 0){
            string = string.slice(0, i) + "<br>" + string.slice(i);
        }
    }
    return string;
}

function InvertionTechnique_Red(){                                                       // смена темы  (просто меняются цвета)
    let lang_names = document.getElementsByClassName("repo-info__lang-name");
    let times_of_creation = document.getElementsByClassName("creation-time");
    let times_of_updating = document.getElementsByClassName("updation-time");
    if(theme_swap_button.style.backgroundImage == "url(\"solar.png\")"){
        theme_swap_button.style.backgroundImage = "url(\"lunar.png\")";
        theme_swap_button.style.border = "2px solid #040507";
        if(document.getElementsByClassName("not-found-message").length != 0){
            document.getElementsByClassName("not-found-message")[0].style.color = "#040507";
        }
        body.style.backgroundColor = "#f7f7f7";
        upper_menu_input.style.backgroundColor = "#f7f7f7";
        finding_repos_div.style.backgroundColor = "#f7f7f7";
        suggest_text.style.color = "#040507";
        repos_name_input.style.backgroundColor = "#f7f7f7";
        repos_name_input.style.color = "#040507";
        owner_link.style.color = "#040507";
        repo_link.style.color = "#040507";
        owner_link1.style.color = "#040507";
        repo_link1.style.color = "#040507";
        top_owners_text.style.color = "#040507";
        top_repos_text.style.color = "#040507";
        button1.style.backgroundImage = "url(\"button1_inverted.jpg\")";
        button2.style.backgroundImage = "url(\"button2_inverted.webp\")";
        get_info_button.style.backgroundColor = "#f0f6fc";
        get_info_button.style.color = "#040507";
        burger_button.style.backgroundImage = "url(\"burger-icon_inverted.png\")";
        for(let i = 0; i < lang_names.length; i++){
            lang_names[i].style.color = "#040507";
            times_of_creation[i].style.color = "#040507";
            times_of_updating[i].style.color = "#040507";
        }
    }
    else if(theme_swap_button.style.backgroundImage == "url(\"lunar.png\")"){
        theme_swap_button.style.backgroundImage = "url(\"solar.png\")";
        theme_swap_button.style.border = "2px solid #f0f6fc";
        if(document.getElementsByClassName("not-found-message").length != 0){
            document.getElementsByClassName("not-found-message")[0].style.color = "#f0f6fc";
        }
        body.style.backgroundColor = "#040507";
        upper_menu_input.style.backgroundColor = "#040507";
        finding_repos_div.style.backgroundColor = "#151b23";
        suggest_text.style.color = "#f7f7f7";
        repos_name_input.style.backgroundColor = "#151b23";
        repos_name_input.style.color = "#f0f6fc";
        owner_link.style.color = "#f7f7f7";
        repo_link.style.color = "#f7f7f7";
        owner_link1.style.color = "#f7f7f7";
        repo_link1.style.color = "#f7f7f7";
        top_owners_text.style.color = "#f7f7f7";
        top_repos_text.style.color = "#f7f7f7";
        button1.style.backgroundImage = "url(\"button1.jpg\")";
        button2.style.backgroundImage = "url(\"button2.webp\")";
        get_info_button.style.backgroundColor = "#212830";
        get_info_button.style.color = "#f0f6fc";
        burger_button.style.backgroundImage = "url(\"burger-icon.png\")";
        for(let i = 0; i < lang_names.length; i++){
            lang_names[i].style.color = "#f7f7f7";
            times_of_creation[i].style.color = "#f7f7f7";
            times_of_updating[i].style.color = "#f7f7f7";
        }
    }
}