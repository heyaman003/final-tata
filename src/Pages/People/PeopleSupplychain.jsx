import React,{useEffect} from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./People.css";
import { motion } from 'framer-motion';
import TextAnimation from "../../Components/Animatedcounter/TextAnimation";
import { Link ,useLocation,useNavigate} from "react-router-dom";
const PeopleSupplychain = () => {
  const navigate = useNavigate();

  const handleClick = async (event, id) => {
      event.preventDefault(); // Prevent default link behavior
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement) {
        // Calculate the offset based on the current scroll position
        const offset = targetElement.getBoundingClientRect().top - 100;
  
        // Scroll to the element with an offset
        window.scrollBy({
          top: offset,
          behavior: "smooth",
        });
  
        // Update URL
        navigate(`${window.location.pathname}#${id}`);
      }
    }
  const location = useLocation();
  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        console.log("here it is ",location.hash);
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    // Call scrollToTarget when the location changes
    scrollToTarget();
  }, [location]);
  return (
    <div className="people-supply-chain-intro-parent-container">
      <HeadBar
        icon={"/SupplyChain.svg"}
        heading={"Supply chain"}
        theme={"#AD3088"}
        headiconstyle={'#E036AE'}
      />
      <div className="climate-change-intro-container people-main-parent-container">
        <motion.div initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring"}} className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change people-paragraph-style1">
            Recognising the pivotal role of our supply chain in shaping our
            reputation and broader impact, we actively engage with suppliers to
            foster transparency, sustainability and ethical conduct. Tata
            Communications has initiated efforts to evaluate the Environmental,
            Social, and Governance (ESG) parameters of our primary suppliers.
          </p>
          <p className="paragraph-inside-climate-change people-paragraph-style2">
            Our commitment to ethical business practices, human rights, employee
            well-being, and environmental protection is enforced through a
            robust management strategy across our network of 1515 SCM-managed
            suppliers.
          </p>
          <p className="paragraph-inside-climate-change people-paragraph-style2">
            We ensure supplies from OEMs or authorized distributors and engage
            contractors for general services, holding all to high standards as
            per our Supplier Code of Conduct and Mandatory Safety Standards.
            This accountability extends through our supply chains, demanding
            risk management and the upholding of our principles at every level.{" "}
          </p>
        </motion.div>
        <motion.div  initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1.3,type:"spring"}}  className="climate-change-intro-photos-inside-container">
          <img
         style={{height:"450px",width:"100%"}}
            className="intro-climate-image intro-people-image"
            src="/peoplesupplychain.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="planet-climate-last-section-parent">
        <div className="main-section-climate-change">
          <div id='Responsible-sourcinge' className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              Responsible Sourcing
            </b>
            <br />
            <br />
            <b
              className="heading-main-section-climate-change people-heading-main"
              style={{ fontWeight: "300" }}
            >
              SCM Managed Suppliers
            </b>
            <p
              className="bigger-paragraph-people-descriptions specail-description-heading"
              style={{ width: "100%",marginTop:"0"}}
            >
              Our spend is spread across various categories based on business
              and customer needs:{" "}
            </p>
          </div>
          <motion.div transition={{staggerChildren:0.1}} className="svg-group-supplychain-container">
          <motion.img initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut",delay:0.1}} src="/supplychain01.svg" alt="" />
            <motion.img initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut",delay:0.2}} src="/supplychain02.svg" alt="" />
            <motion.img initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut",delay:0.3}} src="/supplychain03.svg" alt="" />
           <motion.img initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut",delay:0.4}}src="/supplychain04.svg" alt="" />
            <motion.img initial={{ scale:0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut",delay:0.5}} src="/supplychain05.svg" alt="" />
          </motion.div>
          <div className="image-container-supply-chain">
            <div className="image-container-div">
              <motion.p initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} className="image-desc-supply-chain">
                We also categorise our suppliers based on their wallet share of
                spend in Tata Communications. Suppliers are divided into 3
                categories, where the percentage of suppliers in each category
                is:
              </motion.p>
              <motion.img initial={{ scale:0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }} transition={{duration:1,ease:"easeInOut"}} src="/circle-graph-people01.svg" alt="" />
            </div>
            <div className="line"></div>
            <div className="image-container-div">
              <motion.p initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} className="image-desc-supply-chain">
                We spend USD 795 Million (INR 6,591 Crores) for the procurement
                of equipment and services, with over 1,500+ direct suppliers
                around the world geographically to support our operations and
                meet customer needs:
              </motion.p>
              <motion.img initial={{ scale:0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }} 
              transition={{duration:1,ease:"easeInOut",delay:0.2}}
            src="/circle-graph-people02.svg" alt="" />
            </div>
          </div>
          <div id='Sustainable-Supply-Chain-Framework' className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <motion.b initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} className="heading-main-section-climate-change people-heading-main">
               Sustainable Supply Chain Framework
            </motion.b>
            <br />
            <br />
            <motion.h6 initial={{y:"-100px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} className="heading-black-supply-chain">
              Supplier Code of Conduct
            </motion.h6>
            <div className="image-description-and-image-container">
              <motion.p initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} className="description-mage-conatiner-supply-chain">
                We have implemented a comprehensive supplier code of conduct,
                aligned with our core values of sustainability, innovation and
                technology. This policy embodies our commitment to upholding the
                highest standards of sustainable and ethical practices.
              </motion.p>{" "}
              <motion.img initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}} src="/supplychain-img04.svg" alt="" />
            </div>
          </div>
          <div className="supply-chain-container-pink">
            <motion.h6 initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}}  className="heading-black-supply-chain">
              Supplier Code of Conduct
            </motion.h6>
            <motion.p initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}}  className="description-mage-conatiner-supply-chain">
              We have implemented a comprehensive supplier code of conduct,
              aligned with our core values of sustainability, innovation and
              technology. This policy embodies our commitment to upholding the
              highest standards of sustainable and ethical practices.
            </motion.p>
          </div>
          <motion.div initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}}  id='Supplier-Diversity' className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              Supplier Diversity
            </b>
            <h6
              className="bigger-paragraph-people-descriptions specail-description-heading"
              style={{ width: "100%" }}
            >
              We remain committed to promote vendor diversity within our supply
              chain.
            </h6>
            <p
              className="description-mage-conatiner-supply-chain"
              style={{ width: "100%", textAlign: "left" }}
            >
              It not only helps to create a more inclusive and equitable
              business environment but also creates indirect employment for
              historically marginalised communities, women entrepreneurs and
              businesses operated by people with disabilities (PWD). These
              endeavours help to nurture a more diverse and representative
              network of suppliers while concurrently contributing to the
              economic empowerment of underrepresented groups.
            </p>
          </motion.div>
          <div  
            className="image-description-and-image-container"
            style={{ padding: "1rem" }}
          >
            <motion.img
            initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1.3,type:"spring"}}
              style={{ width: "35%" }}
              src="/supplychange-people-img05.png"
              alt=""
            />
            <motion.p
            initial={{y:"-100px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.3,type:"spring"}}
              className="description-mage-conatiner-supply-chain"
              style={{ marginRight: "0", width: "52%", marginLeft: "1rem" }}
            >
              <h6  className="heading-black-supply-chain">
                Tata Affirmative Action Program (TAAP)
              </h6>
              Established in 2007, the TAAP programme aims to address structural
              and social disparities in India by providing equal opportunities
              and creating an environment for inclusive growth for historically
              marginalised social groups including Dalits, tribals, women and
              people with disabilities.
            </motion.p>{" "}
          </div>
          <div className="source-of-identification-container">
            <h6 className="pink-bold-heading" >
            Sources of Identification of Suppliers:
            </h6>
            <motion.div initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1,type:"spring"}} className="specail-style-pink-identification-supplier">
             <img   src="/supply-chain-img06.svg" alt="" />
            </motion.div>
          </div>
          <div id='ESG-Due-Diligence' className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
            ESG Due Diligence
            </b>
            <br />
            <br />
            <div className="image-description-and-image-container">
              <motion.p  initial={{x:"-100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}}  className="description-mage-conatiner-supply-chain" style={{width:"100%"}}>
              To uphold the principles of responsible sourcing, we have instituted the Sustainable Supply Chain Framework (SSCF).
              </motion.p>
              <br />
              <br />
              <motion.p  initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeInOut"}}  className="description-mage-conatiner-supply-chain" style={{fontSize:"20px",width:"100%"}}>
                We have implemented a comprehensive supplier code of conduct,
                aligned with our core values of sustainability, innovation and
                technology. This policy embodies our commitment to upholding the
                highest standards of sustainable and ethical practices.
              </motion.p>{" "}
            </div>
          </div>
          <motion.div initial={{y:"100px",opacity:0,scale:0.5}} animate={{y:0,opacity:1,scale:1}} transition={{duration:1,type:"spring"}} className="image-container-supplychain-008">
            <img src="/supplychainimg008.svg" alt="" />
          </motion.div>
        </div>

        < motion.div initial={{x:"100px",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3, type:"spring"}} className="quick-link-sections">
        <b className="heading-links"><TextAnimation text={'Quick'}/><TextAnimation text={'Links'}/></b>
          <br />
          <img src="/quick-link-underline.png" alt="" />
          <div  className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
<Link target="_blank" to={'/Sustainability/fy24-goals-&-progress'}>Goals and Progress</Link>          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
             <Link target="_blank" to="/Governance/policies-and-procedures#Policies">Policies</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"Responsible-sourcinge")}>Responsible Sourcinge</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"Sustainable-Supply-Chain-Framework")} >Sustainable Supply Chain Framework</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"Supplier-Diversity")}>Supplier Diversity</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <li onClick={(event)=>handleClick(event,"ESG-Due-Diligence")} >ESG Due Diligence</li>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
             <Link target="_blank" to="/gri-index">GRI index</Link>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">SDG Linkage</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeopleSupplychain;
