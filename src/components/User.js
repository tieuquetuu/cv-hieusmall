import userData from "../data/HieuSmall";

function User(props) {
    props = typeof props == "object" && props instanceof Object && Object.values(props).length ? props : {};
    let {lang} = props;
    let acceptLanguage = ["en","vi"];
    lang = typeof lang == "string" && acceptLanguage.includes(lang) ? lang : "vi";
    return userData[lang];
}

const user = User();

export default user;