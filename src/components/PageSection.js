import PageSectionData from "../data/PageSection";

function PageSection(props) {
    props = typeof props == "object" && props instanceof Object && Object.values(props).length ? props : {};
    let {lang} = props;
    let acceptLanguage = ["en","vi"];
    lang = typeof lang == "string" && acceptLanguage.includes(lang) ? lang : "vi";
    return PageSectionData[lang];
}

export default PageSection;