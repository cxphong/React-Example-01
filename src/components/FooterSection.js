import FooterItem from "./FooterItem";

function FooterSection(props) {
    return(
        <h3 style={{color: "white", fontWeight: "600"}}>{props.section}</h3>
    );
}

export default FooterSection;
