import Banner from '@design/Banner'
import Container from '@design/Container'
import H2 from '@design/H2'
import WishImage from '@images/wish-banner.png'
import WishQuote from '@images/wish-quote.png'
import WishCurrent from '@images/wish-current.png'
import FloProposed1 from '@images/flo-proposed-1.png'
import FloProposed2 from '@images/flo-proposed-2.png'
import FloProposed3 from '@images/flo-proposed-3.png'

const Wish = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <Banner pic={WishImage} />
            <Container color="black">
                <h1 className="design-h1">Wish Design Challenge</h1>
                <p className="design-h1-desc">Making menstrual hygiene products more accessible with Flo</p>
                <span className="design-info">Duration: 3 days</span>
                <span className="design-info">Type: Individual project</span>
            </Container>
            <Container color="white">
                <H2 top="OVERVIEW" bottom="Project description" />
                <h3 className="design-h3 gray">Design challenge prompt</h3>
                <p className="design-para">Choose an existing company, organization, or social movement and help them design a mobile experience that allows an individual to tackle a major problem afflicting society today.</p>
                <h3 className="design-h3 gray">What is period poverty?</h3>
                <p className="design-para">Period poverty is the lack of access to sanitary products, menstrual hygiene education, toilets, hand washing facilities, and, or, waste management.</p>
                <img className="center-mg max-width-100" alt="Wish quote" src={WishQuote} />
                <h3 className="design-h3 gray">Challenge</h3>
                <p className="design-para">How might we create an experience that makes menstrual products more accessible for disadvantaged communities?</p>
                <h3 className="design-h3 gray">Outcome</h3>
                <p className="design-para">I am proposing...an extension of Flo that allows its users to help communities gain access to menstrual products.</p>
            </Container>
            <Container color="black">
                <H2 top="USER RESEARCH" bottom="Understanding the users"/>
                <h3 className="design-h3">How is period poverty affecting people?</h3>
                <p className="design-para">According to the study by BMC Women’s Health in 2019, 2 out of the 3 women surveyed did not have the resources to buy menstrual hygiene products. 1 out of the 5 respondents struggle to afford period products on a monthly basis. Without these essential items, women’s movement and ambitions are hindered. In addition, around 40 million women use substandard materials like newspapers, toilet paper, and dirty rags/clothes.The pandemic has also exacerbated the issue wherein 1 in 10 college students were unable to afford period products.</p>
                <h3 className="design-h3">What factors contribute to this problem?</h3>
                <p className="design-para">
                Luxury items: 35 states in the US impose a value-added tax (often called the“tampon tax”) as menstrual hygiene products are considered “luxury” items.
<br /> • <b>Inaccessibility</b>: Food stamps, Medicaid, or health insurance spending accounts cannot be used to purchase menstrual hygiene products.
<br /> • <b>Hidden costs</b>: In addition to monetary costs, hidden costs such as the need to take time off of work or school due to painful symptoms exist in a woman’s life.
<br /> • <b>Health risks</b>: Poor menstrual hygiene due to inaccessibility of period products leads to major health risks such as UTIs and reproductive issues.
<br /> • <b>Emotions</b>: Women also experience feelings of shame and guilt when they cannot take care of themselves during their menses.
                </p>
                <h3 className="design-h3">Whose problem am I solving?</h3>
                <p className="design-para">Students, homeless, low-income background, transgender, non-binary, imprisoned</p>
            </Container>
            <Container color="white">
                <H2 top="DEFINE" bottom="Piercing things together" />
                <h3 className="design-h3 gray">What is Flo and why did I choose it?</h3>
                <p className="design-para">Flo is a women's health app that supports women at each stage of their reproductive cycle. It tracks menstruation, cycle prediction, preparation for conception, pregnancy, early motherhood and menopause. 
By leveraging the strong community at Flo, we will use the power of knowledge to encourage users to donate menstrual hygiene products to disadvantaged communities.</p>
            </Container>
            <Container color="black">
                <H2 top="BRAINSTORMING" bottom="Ideas and more ideas..." />
                <h3 className="design-h3">What does a good donation site have?</h3>
                <p className="design-para">
                According to Nielsen Norman Group’s study, only 43% of the donation websites studied clarified what the goal of the organization is and how the money will be spent.
<br /> • Other important donation killers:
<br /> • Lack of clarity about the donation process
<br /> • Usability problems relating to page and site design
<br /> • Content issues related to writing for the Web
                </p>
                <h3 className="design-h3">Solution 1:</h3>
                <p className="design-para">Marketplace: Users’ could donate menstrual products allowing other users (who need those products) to receive them using in-app communication methods. But this idea failed as I did not take into consideration the idea of external costs, target audiences’ resources, and affordability of the donation products.</p>
                <h3 className="design-h3">Solution 2:</h3>
                <p className="design-para">What about creating a monetary donation section? Users can use monetary donations to fund organizations that make menstrual hygiene products accessible to the disadvantaged communities. This would allow:
                <br /> • Users can donate any amount of money. Since menstrual products are quite expensive, users are not bound to purchasing items that they may not afford. 
                <br /> • Facilities have the freedom to purchase any items that benefit the disadvantaged communities.
                <br /> • Flo does not have to facilitate the delivery of these items.
</p>
            </Container>
            <Container color="white">
                <H2 top="DESIGN" bottom="To Figma we go!" />
                <h3 className="design-h3 gray">Current application</h3>
                <img className="center-mg max-width-100" alt="Wish quote" src={WishCurrent} />
                <h3 className="design-h3 gray">Proposed design</h3>
                <p className="design-para">I proposed an extension of Flo that allowed users to raise money for organizations that helped disadvantaged communities gain access to menstrual hygiene products. </p>
                <div className="flex-row flex-center">
                   <img className="width-50" src={FloProposed1} alt="Proposed Flo 1" />
                   <span className="width-50 design-para">
                   <span className="bold">Donate tab:</span> This section allows users to find organizations and facilities. Users can filter their search by location and type of organization.  When an organization is selected, users are provided with a brief description of what the organization stands for and how a user’s donation can impact someone’s life. 
                   </span>
                </div>
                <div className="flex-row flex-center">
                    <img className="width-50" src={FloProposed2} alt="Proposed Flo 2" />
                    <span className="width-50 design-para">
                        <span className="bold">Donation Process: </span>Users have two options of donation:
                        <br /> • One-time: One time, one amount
                        <br /> • Subscription: Monthly recurring payment to help the disadvantaged community gain stability.
                    </span>
                </div>
                <div className="flex-row flex-center">
                    <img className="width-50" src={FloProposed3} alt="Proposed Flo 3" />
                    <span className="width-50 design-para">
                        <span className="bold">Status update: </span>Users also receive notifications about the status of their donation so they know that their money is actually being used and not just being collected. This creates a connection between the organization and user which may encourage users to donate more.
                    </span>
                </div>
            </Container>
            <Container color="black">
                <H2 top="REFLECTION" bottom="Lessons learned" />
                <h3 className="design-h3">If I had more time...</h3>
                <p className="design-para">• Tested this solution to find areas of improvement
                <br />• Found more innovative donation methods</p>
                <h3 className="design-h3">Biggest challenge...</h3>
                <p className="design-para">Designing a mobile experience that helps people without access to smartphones.</p>
                <h3 className="design-h3">What did I take away from this?</h3>
                <p className="design-para"> • When in doubt, look back at your research findings! I found that refreshing myself on the disadvantaged communities and their pain points helped me develop a thorough understanding of the problem space which later helped me when I designed my solution.
                <br />• Thinking from not only the donor’s perspective but also the members of the disadvantaged communities, Flo taught me about the multiple roles involved in product design. For a product to be successful, a designer must design a solution that solves the problem from the design, business as well as outreach lens.
                <br />• One of Flo’s values is inclusivity and I wanted that to be reflected throughout the design process. As a designer, I have the ability and responsibility to ingrain greater diversity and representation into my designs.</p>
            </Container>

        </div>
    )
}

export default Wish