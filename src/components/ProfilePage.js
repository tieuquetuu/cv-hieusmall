import React, {useEffect} from "react";
import user from "../components/User";
import PageSection from "./PageSection";
import Wall800x400 from "../wall800x400.jpg";
import Avatar800x800 from "../ava800x800.jpg";
import tmvnd1000x900 from "../img/tmvnd1000x900.jpg";
import minigame1000x900 from "../img/minigame1000x900.jpg";
import toolsndnet1000x900 from "../img/toolsndnet1000x900.jpg";
import leloiresedence1000x900 from "../img/leloiresedence1000x900.jpg";
import tmvndScreen1 from "../img/screens/tmvnd/1.jpg";
import minigameScreen1 from "../img/screens/minigame/1.jpg";
import toolsScreen1 from "../img/screens/tools/1.jpg";
import toolsScreen2 from "../img/screens/tools/2.jpg";
import toolsScreen3 from "../img/screens/tools/3.jpg";
import toolsScreen4 from "../img/screens/tools/4.jpg";
import leloiScreen1 from "../img/screens/leloiresidence/1.jpg";
import NgocDung2x1 from "../img/ngocdung2x1.png";
import AvatarLeCongAn from "../img/le_cong_an.jpg";
import AvatarTranPhuocPhuong from "../img/tran_phuoc_phuong.jpg";
import AvatarHoangNghia from "../img/hoang_nghia.jpg";
import cvPDF from "../files/Nguyễn Trung Hiếu.pdf";
import cvDOCX from "../files/Nguyễn Trung Hiếu.docx";
import CardMargin from "./CardMargin";
import "../libs/@fontawesome/fontawesome-pro/css/all.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import $ from "jquery";
import Swal from 'sweetalert2';
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
const pageSection = PageSection();

// Card Profile

function UserAvatarCover() {
    return(
        <div className="card-profile-cover">
            <img alt={user.name} src={Wall800x400} className="card-img-top" />
        </div>
    )
}

function UserAvatar() {
    return(
        <a href="/#" className="mx-auto">
            <img alt={user.name} src={Avatar800x800}
                 className="card-profile-image avatar rounded-circle shadow hover-shadow-lg" />
        </a>
    )
}

function PersonalInfo() {
    return(
        <div className="card-body p-3 pt-0 text-center">
            <h5 className="mb-0">{user.name}</h5>
            <span className="d-block text-muted mb-3" style={{fontStyle:"italic"}}>{user.profession}</span>
        </div>
    )
}

function Contact() {
    let sectionContact = PageSection().contact;
    let {title, icon, group} = sectionContact;
    let ContactTitle = <h5 className={"card-header border-0 page-title"}><i className={icon+" mr-2"}></i> {title}</h5>
    let ContactGroupItems = group.map((item, itemKey)=> {
        let classes = "list-group-item border-0 bg-transparent py-2 d-flex align-items-center";
        item.text = user[item.slug];
        item.link = null;
        let ItemLabel = <span className={"mr-3 text-xs"}><i className={"mr-1 "+item.icon}></i> {item.label} </span>
        let ItemText = <span className={"ml-auto w-65 text-left"}>{item.text}</span>;
        if (item.slug === "email") {
            ItemText = <a className={"ml-auto w-65 text-left"} href={"mailto:"+item.text} title={item.text}>{item.text}</a>
        } else if(item.slug === "phone") {
            ItemText = <a className={"ml-auto w-65 text-left"} href={"tel:"+item.text} title={"item.text"}>{item.text}</a>
        }

        return(
            <div key={itemKey} className={classes}>
                {ItemLabel}
                {ItemText}
            </div>
        )
    });
    let ContactGroup = <div className={"list-group text-sm border-0"}>{ContactGroupItems}</div>
    return(
        <div className={"pt-2 mt-2 delimiter-top"}>
            {ContactTitle}
            {ContactGroup}
        </div>
    )
}

function Social() {
    let SectionSocial = PageSection().social;
    let {title, icon, group} = SectionSocial;
    let SocialTitle = <h5 className={"card-header border-0 page-title"}><i className={icon+" mr-2"}></i> {title}</h5>;
    let SocialGroupItems = group.map((item, itemKey)=> {
        let classes = "list-group-item border-0 bg-transparent py-2";
        item.link = user.social[item.slug];
        item.text = item.link.replace("https://", "");
        let ItemLabel = <div className="mr-3 icon icon-xs" style={{color: item.color}}>
            <i className={item.icon}></i>
        </div>;
        let ItemText = <div className="media-body">
            <a href={item.link} className="text-xs d-block" target="_blank" rel="noopener noreferrer">
                <span style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>{item.text}</span></a>
        </div>;

        return(
            <div key={itemKey} className={classes}>
                <div className="media align-items-center">
                    {ItemLabel}
                    {ItemText}
                </div>
            </div>
        )
    });
    let SocialGroup = <div className={"list-group text-xs border-0"}>{SocialGroupItems}</div>;
    return(
        <div className={"pt-2 mt-2 delimiter-top"}>
            {SocialTitle}
            {SocialGroup}
        </div>
    )
}

function CardProfile(props) {
    // let {id} = props;
    return(
        <div id={"card-profile"} className={"card card-profile border-0"}>
            <UserAvatarCover/>
            <UserAvatar/>
            <PersonalInfo/>
            <Contact/>
            <Social/>
            <SoftSkill/>
            <Endorsements/>
        </div>
    )
}

function ColLeft() {
    return(
        <div className={"col-lg-4"}>
            <CardMargin id={"card-left"} targetMargin={".card-profile-cover"}>
                <CardProfile/>
            </CardMargin>
        </div>
    )
}

function Experience() {
    let experience = user.experience;
    let experienceSection = PageSection().experience;
    let {title, icon} = experienceSection;
    let ExperieceTitle = (<h5 className={"mb-4 page-title"}>
        <i className={"mr-2 "+icon}></i> {title}
    </h5>);
    let ExperienceTimelineBlocks = experience.map((exp, key)=>{
        let {description, website, company} = exp;
        description = typeof description == "object" && description instanceof Array ? description : null;
        website = typeof website == "string" && website.trim().length ? website : null;
        let timelineDescription = null;
        let stepClass = "timeline-step border-danger";

        if (key > 0) {
            stepClass += " timeline-step-sm"
        }

        if (description) {
            timelineDescription = <ul className={"text-sm pt-3"}>
                {description.map((text, c)=>
                    <li key={c} ><span>{text}</span></li>
                )}
            </ul>
        }

        let CompanyName = null;
        if (website) {
            CompanyName = <a href={website} target={"_blank"} rel="noopener noreferrer">{company}</a>
        } else {
            CompanyName = <span>{company}</span>
        }

        return(
            <div key={key} className="timeline-block hover-translate-y-n10">
                <span className={stepClass}/>
                <div className="timeline-content">
                    <small className="text-muted font-weight-bold">{exp.distance.begin} - {exp.distance.end}</small>
                    <h6>{exp.position}
                        <span className={"text-xs text-primary font-weight-500 mx-2"}>
                            <i className={"fad fa-map-pin mr-1"}></i>tại</span> {CompanyName}</h6>
                    {timelineDescription}
                </div>
            </div>
        )
    });
    let ExperienceTimeline = (<div className={"timeline timeline-one-side"}>
        {ExperienceTimelineBlocks}
    </div>);
    return(
        <div>
            {ExperieceTitle}
            {ExperienceTimeline}
        </div>
    );
}

function Education() {
    let education = user.education;
    let {title, icon} = pageSection.education;
    let TitleEducation = (<h5 className="mb-4 page-title"><i className={"mr-2 "+icon}></i> {title}</h5>);
    let EducationBlocks = education.map((edu, key)=>{
        let {university, specialized, distance, status, description} = edu;
        return(<div key={key} className="timeline-block hover-translate-y-n10">
            <span className="timeline-step border-info"></span>
            <div className="timeline-content">
                <small className="text-muted font-weight-bold">{distance.begin} - {distance.end}</small>
                <h6 className="text-sm">
                    {status} {specialized}
                    <span className="text-xs text-primary font-weight-500 mx-2">
                        <i className="fad fa-map-pin mr-1"></i>tại</span>{university}</h6>
                <div className={"text-sm"}>
                    <p>{description}</p>
                </div>
            </div>
        </div>)
    });

    let EducationTimeline = (<div className={"timeline timeline-one-side"}>
        {EducationBlocks}
    </div>);

    return (<div className={"mt-4 pt-4 delimiter-top"}>
        {TitleEducation}
        {EducationTimeline}
    </div>)
}

function RankRating(props) {
    props = typeof props == "object" && props instanceof Object && Object.values(props).length ? props : {};
    let {rate, slug, icon, rankForThis} = props;
    rate = typeof rate == "number" && rate > 0 ? rate : 0;
    icon = typeof icon == "string" && icon.length ? icon : "fa-star";
    let rankId = "rank-"+slug;
    let Rank = (<div id={rankId} className="static-rating static-rating-sm d-block">
        {Object.keys(rankForThis).map(function (lv, key) {
            let rank = rankForThis[lv];
            let classes = "dev-rate-level rank-item star "+icon;
            if (rate >= lv) {
                classes += " fas complete voted";
            } else {
                classes += " far not-complete";
            }
            return (
                <i data-rank={lv} key={key} data-toggle={"tooltip"} title={rank.desc} className={classes}/>)
        })}
    </div>);
    useEffect(() => {
        $(window).on("load", function () {
            let $rateWrap = $("#"+rankId);
            let $rateItems = $rateWrap.find(".rank-item");
            let $notCompleteItems = $rateWrap.find(".not-complete");
            $rateItems.tooltip();
            $notCompleteItems.hover(function () {
                let $this = $(this);
                let $prevItems = $this.prevAll().filter((index, elem) => $(elem).hasClass("not-complete"));
                [$prevItems, $this].forEach(function ($item) {
                    $item.toggleClass("far").toggleClass("fas").toggleClass("complete-demo")
                });
            });
        })
    });
    return Rank
}

function DevelopmentSkill() {
    let development = user?.skill?.development;
    let {technologies, description} = development;
    let developmentSection = pageSection?.skill?.development;
    let {title, icon, rank} = developmentSection;

    technologies = typeof technologies == "object" && technologies instanceof Object ? technologies : null;
    description = typeof description == "object" && description instanceof Array ? description : null;

    let DevelopmentTitle = (<h5 className={"mb-4 page-title"}>
        <i className={"mr-2 "+icon}></i>{title}
    </h5>);
    let DevelopmentTechs = technologies ? technologies.map((tech, key)=>{
        let {icon, name, lv, slug, color} = tech;
        let TechIcon = null;
        if (icon) {
            TechIcon = <i style={{color: color}} className={"mr-2 "+icon}></i>
        }
        let TechName = <div>
            <a href="/#" className="badge badge-md badge-soft-primary d-inline-block">
                {TechIcon} {name}</a>
        </div>
        let TechRank = <div className={"ml-auto w-65 text-right"}>
            {RankRating({rate: lv, slug: slug, icon:"fa-rectangle-wide",rankForThis: rank})}
        </div>;
         return (
             <div key={key} className="col-lg-6 mb-3">
                 <div className="d-flex align-items-center">
                     {TechName}
                     {TechRank}
                 </div>
             </div>
         )
    }) : null;
    let TechnologiesRank = !DevelopmentTechs ? null : (<div className={"row"}>
            {DevelopmentTechs}
        </div>);
    let DescriptionItems = description ? description.map((text, key)=> {
        return (<li key={key}>
            {text}
        </li>)
    }) : null;
    let DevelopmentDescription = !DescriptionItems ? null : (<ul className={"text-sm mb-4 hover-translate-y-n10"}>{DescriptionItems}</ul>);
    return(
        <div className={"mt-4 pt-4 delimiter-top"}>
            {DevelopmentTitle}
            {DevelopmentDescription}
            {TechnologiesRank}
        </div>
    )
}

function SoftSkillRank(props) {
    props = typeof props == "object" && props instanceof Object && Object.values(props).length ? props : {};
    let {rate, slug} = props;
    rate = typeof rate == "number" && rate > 0 ? rate : 0;
    let rankId = "rank-"+slug;
    let ReactionLists = [
        {
            level: 1,
            icon: "fa-sad-tear"
        },
        {
            level: 2,
            icon: "fa-frown"
        },
        {
            level: 3,
            icon: "fa-meh"
        },
        {
            level: 4,
            icon: "fa-smile"
        },
        {
            level: 5,
            icon: "fa-laugh"
        }
    ];
    let ReactionRank = <div id={rankId} className={"static-rating static-rating-sm d-block"}>
        {ReactionLists.map((rank, key)=>{
            let {level, icon} = rank;
            let classes = `dev-rate-level level-${level} rank-item star `;
            classes += icon;
            if (rate >= level) {
                classes += " fas complete voted";
            } else {
                classes += " far not-complete";
            }
            return(<i data-rank={level} key={key} className={classes}/>)
        })}
    </div>;
    useEffect(() =>{
        $(window).on("load", function () {
            let $rateWrap = $("#"+rankId);
            let $rateItems = $rateWrap.find(".rank-item");
            let $notCompleteItems = $rateWrap.find(".not-complete");
            $rateItems.tooltip();
            $notCompleteItems.hover(function () {
                let $this = $(this);
                let $prevItems = $this.prevAll().filter((index, elem) => $(elem).hasClass("not-complete"));
                [$prevItems, $this].forEach(function ($item) {
                    $item.toggleClass("far").toggleClass("fas").toggleClass("complete-demo")
                });
            });
        })
    })
    return ReactionRank;
}

function SoftSkill() {
    let soft = user.skill.soft;
    let softSection = pageSection.skill.soft;
    let {title,icon, rank} = softSection;
    let SoftTile = (<h5 className={"card-header border-0 page-title"}>
        <i className={"mr-2 "+icon}></i>{title}
    </h5>);
    let SoftList = soft.map((skill, key)=> {
        let {lv, slug} = skill;
        return(
            <div key={key} className="list-group-item border-0 bg-transparent py-1 text-sm">
                <div className="d-flex align-items-center">
                    <div className={"w-50 text-xs mr-4"}>
                        {skill.label}
                    </div>
                    <div className={"w-50 text-right ml-auto"}>
                        {/*{RankRating({rate: lv, slug: slug, icon:"fa-star",rankForThis: rank})}*/}
                        {SoftSkillRank({rate:lv, slug: slug, rankForThis: rank})}
                    </div>
                </div>
            </div>
        )
    });
    let SoftGroup = (<div className={"list-group"}>
            {SoftList}
        </div>);

    return(
        <div className={"mt-2 pt-2 delimiter-top"}>
            {SoftTile}
            {SoftGroup}
        </div>
    )
}

function Projects() {
    let id = "project";
    let FeatureImages = [
        {
            name: "leloiresidence",
            img: leloiresedence1000x900,
            screens: [leloiScreen1]
        },
        {
            name: "minigame",
            img: minigame1000x900,
            screens: [minigameScreen1]
        },
        {
            name: "tmvnd",
            img: tmvnd1000x900,
            screens: [tmvndScreen1]
        },
        {
            name: "tools",
            img: toolsndnet1000x900,
            screens: [toolsScreen1, toolsScreen2, toolsScreen3, toolsScreen4]
        }
    ]
    let projects = user.projects;
    let {title, icon} = pageSection.projects;
    let ProjectTitle = (<h5 className={"mb-4 page-title"}>
        <i className={"mr-2 "+icon}></i>{title}
    </h5>);
    let ProjectList = projects.map((sp, key)=>{
        let {name, url, technologies, slug} = sp;
        url = typeof url == "string" && url.trim().length ? url : null;
        let featureImage = FeatureImages.find(obj => obj.name === slug).img;
        let screens = FeatureImages.find(obj => obj.name === slug).screens;
        let groupName = "gallery_"+slug;
        return(<div key={key} className={"col-lg-6 border-0 mb-2 px-1"}>
            <div className={"card shadow hover-shadow-lg hover-translate-y-n10 border-0 mb-0"}>
                <div className="card-header border-0 p-2">
                    <div className="d-flex align-items-center">
                        <a href={featureImage} data-fancybox={groupName} data-toggle={"tooltip"}
                           data-placement={"left"} title={"Nhấp để xem chi tiết!"}>
                            <img alt={name} src={featureImage}
                                 className="avatar rounded-square avatar-lg hover-shadow-lg hover-scale-110" />
                        </a>
                        <div className="avatar-content ml-3">
                            <h6>{name}</h6>
                            { !url ? null : (<a href={url} target={"_blank"} className={"link text-xs"} rel="noopener noreferrer">
                                <i className={"fad fa-browser"}></i> <span>{url.replace("https://","")}</span></a>)}
                        </div>
                    </div>
                </div>
                <div className="card-body px-2 py-1">
                    <div>
                        {technologies.map((tech, t)=>
                            <a key={t} href="/#!" className={"mr-2 badge badge-soft-warning text-xs mb-2 link"}>
                                {tech}
                            </a>
                        )}
                    </div>
                    <div className={"row mt-2 d-none"}>
                        {screens.map((screen, sk)=>
                            <div key={sk} className={"col-lg-4 mb-2"}>
                                <a href={screen} data-fancybox={groupName}>
                                    <img key={sk} className={"img-fluid"} src={screen} alt=""/>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>)
    });
    let ProjectContent = (<div className={"row"}>
        {ProjectList}
    </div>);

    useEffect(() => {
        $(window).on("load", function () {
            let $project = $("#"+id);
            $project.find("[data-toggle=tooltip]").tooltip();
        });
    });

    return(<div id={id} className={"col-12 pt-2 mt-2"}>
        {ProjectTitle}
        {ProjectContent}
    </div>)
}

function CardProjects() {
    return(<div className={"card bg-transparent border-0 col-lg-12"}>
        <Projects/>
    </div>)
}

function CardContent() {
    let id = "card-content";
    /*useEffect(() => {
        $(window).on("load", function () {
            let MarginTop = $("#card-left").css("margin-top");
            let $cardContent = $("#"+id);
            $cardContent.css("margin-top", MarginTop);
        })
    });*/

    return(
        <div id={id} className="card card-content border-0">
            <div className="card-body">
                <Experience/>
                <Education/>
                <DevelopmentSkill/>
                {/*<SoftSkill/>*/}
            </div>
        </div>
    )
}

function Endorsements() {
    let endorsements = user.endorsements;
    let endorsementsSection = pageSection.endorsements;
    let {icon, title} = endorsementsSection;
    let TitleEndorsements = (<h5 className={"card-header border-0 page-title"}>
        <i className={"mr-2 "+icon}></i>{title}
    </h5>);
    let Avatars = [
        {email: "lecongan1503@gmail.com",image: AvatarLeCongAn},
        {email: "tranphuocphuong@ngocdung.com",image: AvatarTranPhuocPhuong},
        {email: "hoangnghiagll@gmail.com",image: AvatarHoangNghia}
    ];
    let MyCoworkers = endorsements.map((info, key)=>{
        let {name,position,phone,email} = info;
        let avatar = Avatars.find(obj => obj.email === email);
        return (<div key={key} className={"list-group-item bg-transparent border-0 hover-translate-y-n10"}>
            <div className="media align-items-start">
                <div className="mr-3">
                    <img alt={name} src={avatar.image}
                         className="avatar  rounded-square" />
                </div>
                <div className="media-body text-limit">
                    <h6 className="text-sm d-block text-limit">
                        <span>{name}</span>
                    </h6>
                    <span className="d-block text-sm mb-1 text-muted">
                        <img style={{height:20}} src={NgocDung2x1} className={"img-fluid mr-2"} alt=""/>
                        {position}
                    </span>
                    <a className={"mb-1"} href={"mailto:"+email}>
                        <span className={"d-block text-xs"}>
                            <i className={"fad fa-envelope text-body mr-2"}></i> {email}</span>
                    </a>
                    <a className={"mb-1"} href={"/#!"}>
                        <span className={"d-block text-xs"}>
                            <i className={"fad fa-phone text-body mr-2"}></i> {phone}</span>
                    </a>
                </div>
            </div>
        </div>)
    });
    let EndorsementGroup = (<div className={"list-group"}>
        {MyCoworkers}
    </div>);

    return(<div className={"mt-2 pt-2 delimiter-top"}>
        {TitleEndorsements}
        {EndorsementGroup}
    </div>)
}

function ColRight() {
    return(
        <div className={"col-lg-8 mt-5"}>
            <CardContent/>
        </div>
    )
}

function DownLoadCV(props) {
    let wrapId = "download-shape";
    let handleClick = function(e) {
        e.preventDefault(e);
        Swal.fire({
            text: "Chọn file bạn muốn tải về!",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText:
                '<i class="fad fa-file-pdf"></i> PDF',
            confirmButtonColor: '#d64213',
            confirmButtonAriaLabel: 'PDF',
            confirmButtonClass: 'btn btn-sm',
            focusConfirm: false,
            cancelButtonText:
                '<i class="fad fa-file-word"></i> Word',
            cancelButtonColor: '#1d56d6',
            cancelButtonClass: 'btn btn-sm',
            cancelButtonAriaLabel: 'DOCX',
            focusCancel: false,
        })
            .then((result) => {
                let {value, dismiss} = result;
                let downloadPdf = typeof value === "boolean" && value === true ? true :false;
                let downloadWord = typeof dismiss === "string" && dismiss === "cancel" ? true :false;
                if (!downloadPdf && !downloadWord) return false;

                if (downloadPdf) {
                    // window.location.href = cvPDF;
                    window.open(cvPDF, 'Download');
                }
                if (downloadWord) {
                    window.location.href = cvDOCX;
                    // window.open(cvDOCX, 'Download');
                }
            })
    };
    let styles = {
        wrap: {
            position: "fixed",
            left:"unset",
            bottom: "3%",
            right: "1%",
            width: 50,
            height:50
        },
        button: {
            top:"unset",
            right:"unset",
            left:"unset",
            bottom:"unset",
            width: "100%",
            height: "100%"
        }
    }
    useEffect(()=> {
        let $wrap = $("#"+wrapId);
        $wrap.tooltip();
    });
    return(
        <div id={wrapId} className={"floating-items shadow hover-shadow-lg"} data-toggle={"tooltip"}
             data-original-title={"Tải CV của tui"}
             style={styles.wrap}>
            <button type="button" onClick={handleClick} style={styles.button}
                className="icon-floating floating bg-gradient-primary border-0
                 btn btn-animated btn-danger rounded-circle btn-icon-only btn-animated-x">
                <span className="btn-inner--visible"><i className={"far fa-file-download"}></i></span>
                <span className="btn-inner--hidden">
                    <i className="far fa-download"></i>
                </span>
            </button>
        </div>
    )
}

function ProfilePage() {
    return(
        <div className={"main-content"}>
            <section className="header-account-page bg-gradient-primary d-lg-flex d-none align-items-end">

            </section>

            <section className="pt-5 pt-lg-0">
                <div className="container">
                    <div className="row">
                        <ColLeft/>
                        <ColRight/>
                        <CardProjects/>
                    </div>
                </div>
            </section>
            <DownLoadCV/>
        </div>
    )
}

export default ProfilePage;