import React, {useEffect} from "react";
import $ from "jquery";
import Wall800x400 from "../wall800x400.png";
import Avatar800x800 from "../ava800x800.png";
import NativeMargin from "../js/NativeMargin";

let contact = {
    name: "Nguyễn Trung Hiếu",
    email: "hieusmall1102@gmail.com",
    profession: "Web developer",
    age: 25,
    city: "Hồ Chí Minh",
    socials: {
        github: "http://github.com/tieuquetuu",
        facebook: "http://fb.com/hieukitkat.thc",
        linkedin: "http://linkedin.com/in/nguyen-trung-hieu-b6600b181"
    }
}

function AvatarCover() {
    return(
        <div className="card-profile-cover">
            <img alt={contact.name} src={Wall800x400} className="card-img-top" />
        </div>
    )
}

function Avatar() {
    return(
        <a href="/#" className="mx-auto">
            <img alt={contact.name} src={Avatar800x800}
                 className="card-profile-image avatar rounded-circle shadow hover-shadow-lg" />
        </a>
    )
}

function Socicals() {
    let socials = [
        {
            label: "Github",
            link: contact.socials.github,
            icon: "fab fa-github",
            color: "#24292e"
        },
        {
            label: "Facebook",
            link: contact.socials.facebook,
            icon: "fab fa-facebook",
            color: "#0084ff"
        },
        {
            label: "Linkedin",
            link: contact.socials.linkedin,
            icon: "fab fa-linkedin",
            color: "#0073b1"
        }
    ];

    let SocialList = socials.map((social, key)=>
        <div key={key} className="list-group-item border-0 bg-transparent py-2">
            <div className="media align-items-center">
                <div className="mr-3">
                    <i className={social.icon}></i>
                </div>
                <div className="media-body">
                    <a href={social.link} className="text-xs d-block" target="_blank" rel="noopener noreferrer">
                        <span style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>{social.link.replace("http://","")}</span></a>
                </div>
            </div>
        </div>
    );

    return(
        <div className={"mt-4 pt-4 delimiter-top"}>
            <h6 className={"card-header border-0"}>
                <i className="fad fa-share-alt mr-2"></i> Socials
            </h6>
            <div className={"list-group"}>
                {SocialList}
            </div>
        </div>
    )
}

function PersonalInfo() {
    let infos = [
        {
            label: "Thành Phố",
            text: contact.city,
            icon: "fad fa-map-marker-alt"
        },
        {
            label: "Tuổi",
            text: contact.age,
            icon: "fad fa-birthday-cake"
        },
        {
            label: "Email",
            text: contact.email,
            icon: "fad fa-mailbox",
            link: `mailto:${contact.email}`
        }
    ];

    let InfoList = infos.map(function (info, key) {
        let itemClass = "list-group-item border-0 bg-transparent py-2 d-flex align-items-center";
        if (info.link) {
            return(
                <div key={key} className={itemClass}>
                    <span><i className={"mr-1 "+info.icon}></i> {info.label} </span>
                    <a className={"ml-auto w-65 text-left"} href={info.link} title={info.text}>{info.text}</a>
                </div>
            )
        } else {
            return(
                <div key={key} className={itemClass}>
                    <span><i className={"mr-1 "+info.icon}></i> {info.label} </span>
                    <span className={"ml-auto w-65 text-left"}>{info.text}</span>
                </div>
            )
        }
    });

    return(
        <div className={"mt-2 pt-2 delimiter-top"}>
            <h6 className={"card-header border-0"}>
                <i className={"fad fa-id-card-alt mr-2"}></i> Contact
            </h6>
            <div className={"list-group text-xs border-0"}>
                {InfoList}
            </div>
        </div>
    )
}

function Contact() {
    useEffect(()=> {
        let $this = $("#contact");
        NativeMargin($this);
    });

    return(
        <div className={"card card-profile border-0"}>
            <AvatarCover/>
            <Avatar/>
            <div className="card-body p-3 pt-0 text-center">
                <h5 className="mb-0">{contact.name}</h5>
                <span className="d-block text-muted mb-3">{contact.profession}</span>
            </div>
            <PersonalInfo/>
            <Socicals/>
        </div>
    )
}

export default Contact;