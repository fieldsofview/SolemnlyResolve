// ENGLISH
// import instanceMap from '../scripts/categories.js';

const t=5;
const task0 = {
    index: 0,
    catIndex: 0, 
    text: `Parliament has passed a new law, which states that village communities shall be responsible for protection of biodiversity in the forest. The law also gives village communities the right to convert forest villages into revenue villages, allowing construction, sale and commercial activity.`,
    choice1: `Conservationists argue against the law stating that such a move will only favour influential village communities and also lead to degradation of forest land over time.<br><br> Support their demand of repealing the law.`,
    choice2:`A large section of civil society argues in favour of the law stating that it will finally decentralise governance over land and allow local communities to plan for their needs.
    <br><br> 
    Support their demand of notifying the localised governance provisions at the earliest.`,
    choice3: `Industry and farmer association argue in favour of the law stating that this will enable better food security and improvement of livelihood opportunities for local communities.
    <br><br> 
    Support their demand of implementing the law in its entirety.`,
    delta1: [-t, t, 0, -t],
    delta2: [-t, t, t, 0],
    delta3: [t, 2*t, -t, t],
    delta1p:[-1,0,0,1,1,0,0,0,-1,0,0,0,0,1],
    delta2p:[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    delta3p:[0, 1, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1]
};

const task1 = {
    index: 1,
    catIndex: 1, 
    text: `The editor of a popular news channel was fired for tweeting about the presence of hate speech on TV news. The management claimed it violated their internal rule against commenting on the channel's affairs. The editor did not explicitly name any specific channel.`,
    choice1: `The TV Editors' Guild argues that editors should be able to express any opinion on social media as long as their speech is protected by the Constitution.
    <br><br> 
    Support their demand of reinstating the editor and issuing an apology.`,
    choice2:`The news channel management argues that editors must be more responsible in making statements as they speak to millions of viewers and such an unverified opinion would discourage TV news viewership.
    <br><br> 
    Support their decision to fire the editor and maintain their no-comment policy.`,
    choice3: `The News Broadcasting Standards Authority (NBSA) argues that such a statement must be taken seriously and investigated further for the benefit of all viewers.
    <br><br> 
    Support their proceedings to temporarily ban the channel and formulate rules for hateful content on TV news.`,
    delta1: [-t, t, t, 0],
    delta2: [t, 0, -t, t],
    delta3: [-2*t, t, 0, t],
    delta1p:[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    delta2p:[0, 0, 0, -1, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    delta3p:[0, 0, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
};

const task2 = {
    index: 2,
    catIndex: 2, 
    text: `State government has planned to make space for the extension of an oil refinery. It has allocated adjoining government-owned land for this, evicting slum dwellers who had been staying there for the last 3 years. Government says they will be rehabilitated.`,
    choice1: `The state government argues that the expansion is critical to meet the state's energy needs and will also generate many livelihood opportunities.
    <br><br> 
    Support their decision to evict the slum-dwellers from the prime land and start the expansion.`,
    choice2:`Civil society organisations representing the evicted slum dwellers argue that the rehabilitation will displace them far away from the city, where they work for their livelihoods. They claim that none of them will be eligible for jobs in the new refinery.
    <br><br> 
    Support their demand to provide in-situ rehabilitation to the slum-dwellers and preference in employment at the refinery.`,
    choice3: `Environmentalists argue that the expansion of an oil refinery will put all city residents at risk, while also harming the climate by increasing reliance on fossil fuel-based energy.
    <br><br> 
    Support their demand to roll back the expansion plan, shut down the existing plant, and use the space for setting up a solar farm.`,
    delta1: [2*t, t, -t, t],
    delta2: [t, t, -t, -t],
    delta3: [-2*t, -t, t, -t],
    delta1p:[-1, 1, 0, -1, -1, 0, 0, 0, 0, -1, 0, 0, -1, 0],
    delta2p:[1, -1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    delta3p:[0, -1, -1, 1, 1, 0, 0, 0, 0, -1, -1, 0, 1, -1]
};

const task3 = {
    index: 3,
    catIndex: 3, 
    text: `City metro authorities plan to tunnel under a Parsi Fire temple. Entrance to the temple will be restricted during the construction period. Government has offered to relocate the temple and pay for its reconstruction.`,
    choice1: `Metro authories argue that the tunnel is important to improve public transport accessibility for people in nearby areas. They state that plans were already finalised 4 years ago.
    <br><br> 
    Support their decision to build the station next to the Fire Temple.`,
    choice2:`Parsi representatives argue that they were not consulted during the planning process. Construction right under the compound will take away the sanctity of the temple and also hinder access for the foreseeable future.
    <br><br> 
    Support their demand for reinitiating public discussions and realignment of the route.`,
    choice3: `Activist groups argue that the government should not get involved in matters of religious expression and will be violating secular principles by financing the temple reconstrution.
    <br><br> 
    Support their demand against any government accommodation for the Fire Temple and to continue construction as planned.`,
    delta1: [0, t, -t, t],
    delta2: [-t, -t, 2*t, -t],
    delta3: [0, t, -t, -t],
    delta1p:[0, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    delta2p:[0, 0, 1, 1, 1, 1, 1, 1, 0, 0, -1, 1, 1, 1],
    delta3p:[-1, 0, 0, 1, 1, -1, -1, -1, -1, 0, 0, -1, 0, -1]
};

const task4 = {
    index: 4,
    catIndex: 4, 
    text: `Based on complaints of nuisance by traders, street vendors in an old neighbourhood have been evicted by the City Development Authority. The area will now be used for widening its roads.`,
    choice1: `Street vendors and their representative associations argue that they have the right to practice and earn their livelihoods. Evicting them will destroy their incomes. They argue that footfalls in the area will also reduce since many shoppers visit the vendors who have working there for over 20 years.
    <br><br> 
    Support their demand for reinstating their space for vending and provision of certificates by the Development Authority for continued operations.`,
    choice2:`The traders' association argue that the street vendors do not have a legal right over the land they occupy and do not pay rent. Yet, they access prime space in the area attracting shoppers. It argues that this is a nuisance for the shopowners and leads to lower sales for them as fewer vehicle-owning customers can access their shops.
    <br><br> 
    Support their demand for a permanent ban on vending in the commercial area and widening of the roads.`,
    choice3: `The Development Authority argues that street vending in the area is a safety hazard as it prevents the movement of emergency vehicles. They also argue that illegal occupation of the land causes a loss of revenue to the city.
    <br><br> 
    Support the plan of the Development Authority for road widening and auctioning of licenses for setting up a flea market in the area.`,
    delta1: [t, 0, 2*t, -t],
    delta2: [-t, t, 0, t],
    delta3: [t, 0, -t, 2*t],
    delta1p:[1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    delta2p:[-1, -1, 0, 1, 1, 0, 0, 0, -1, -1, -1, 0, 1, -1],
    delta3p:[-1, 0, 0, -1, -1, 0, 0, 0, -1, -1, -1, 0, -1, 0]
};

const task5 = {
    index: 5,
    catIndex: 5, 
    text: `The state government has mandated an increase in the minimum wages to workers across all skill levels. Soon after this increase, garment factory owners have let go of workers to keep costs down, leading to mass lay-offs and retentions only through temporary contracts. The workers are protesting on the streets.`,
    choice1: `The state government argues that revisions in the minimum wage are routinely done. It clarifies that the increase shall only apply to permanent employees and states that any disputes or concerns must be resolved through peaceful discussion.
    <br><br> 
    Support the government's move to end the protests through police action while entirely upholding the wage increase.`,
    choice2:`Global fashion brands argue that factory owners are violating labour laws by laying off workers en-masse. They add that contractual employment takes away employee benefits required by their sourcing agreements with the factories.
    <br><br> 
    Support their call to impose sanctions on all such factories and shift to alternative sourcing from Bangladesh and Indonesia.`,
    choice3: `Garment factory owners argue that the sudden move has put an enormous financial burden on them. Given the low margins in garment exports, they have to undertake contractual employment to retain some workers. They also argue that the government should not interfere in their freedom of practising their profession. 
    <br><br>
    Support the factory owners in retaining some workers on contracts and demanding a deregulation of wages based on market forces.`,
    delta1: [t, -t, -t, t],
    delta2: [-2*t, t, t, 2*t],
    delta3: [t, 2*t, -t, -t],
    delta1p:[1, 1, -1, -1, -1, -1, 0, 0, 1, 0, 1, 0, -1, 1],
    delta2p:[1, -1, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, -1],
    delta3p:[0, 1, -1, 1, 1, 0, 0, 0, 0, -1, -1, 0, 1, 0]
};

const task6 = {
    index: 6,
    catIndex: 6, 
    text: `A TV news channel recently conducted a 'sting operation' on a senior government official. The report uncovered their role in a financial scam concerning taxpayer money, following which they were fired from service. A commission has been set up to investigate fraud by any other officials in the ministry. Soon after that, compromising pictures of the official and her husband in their home were leaked through various online media. The MIB has ordered the channel's license to be revoked stating privacy violations are unconstitutional.`,
    choice1: `The TV news channel argues that it was unaware of the methods used by the journalists while reporting on the story. It states the journalists should face disciplinary action but the channel should not be taken off air, as this will be a major violation of press freedom. It adds that the government is only acting against them after the reports of corruption in a Union Ministry.
    <br><br> 
    Support their demand to reinstate the license and allow continued coverage of the story.`,
    choice2:`The Centre argues that the channel has benefited from the privacy violations caused by the journalists and must be sanctioned. It states that it is committed to rooting out corruption, for which it has set up a commission.
    <br><br> 
    Support their move to permanently revoke the license of the channel, subject to any judicial proceedings and ban further publication of the story.`,
    choice3: `Viewers on social media argue that the journalists had no other options to gain access to the official. They state that they have a right to information of government functioning and any corruption within.
    <br><br> 
    Support their demand to reinstate the license of the channel and set the journalists free.`,
    delta1: [0, t, t, -t],
    delta2: [0, 0, -t, t],
    delta3: [0, 2*t, t, -2*t],
    delta1p:[0, 0, 1, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0],
    delta2p:[0, 0, -1, -1, -1, 0, 0, 0, 0, -1, 0, 0, -1, 0],
    delta3p:[0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, -1]
};

const task7 = {
    index: 7,
    catIndex: 7, 
    text: `Due to poor air quality levels across North India, the Supreme Court has placed a countrywide ban on all firecrackers ahead of Diwali, a religious festival that is usually celebrated with fireworks. Multiple protests are being staged in different states as the government hesitates on implementing the move.`,
    choice1: `The Centre argues that such a move will heavily impact small and medium businesses, which are the core manufacturers of fireworks. A blanket ban will cause them to lose their livelihoods.
    <br><br> 
    Support their move to ignore the Supreme Court order by not implementing it.`,
    choice2:`Groups of protestors argue that this move infringes their right to religious freedom, as it does not allow them to freely practice their religious customs. They argue that if firecrackers are to be banned for Diwali, then religious practices at festivals celebrated by other religions must also be banned. 
    <br><br> 
    Support their demand that the government expand the religious ban to animal sacrifice on Eid and provision of wine to celebrate Mass.`,
    choice3: `Environmentalists argue that a blanket ban is the only option to prevent people from becoming vulnerable to serious illness. 
    <br><br> 
    Support their demand to implement the ban and expand it to be applicable all year.`,
    delta1: [t, t, -2*t, 0],
    delta2: [-t, 2*t, -2*t, t],
    delta3: [-t, -t, t, -t],
    delta1p:[0, 1, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0],
    delta2p:[-1, -1, 0, 1, 1, 0, -1, -1, -1, 0, 0, -1, 1, -1],
    delta3p:[-1, -1, 1, 1, 1, 0, 0, -1, -1, 0, 0, 0, 0, -1]
};

const task8 = {
    index: 8,
    catIndex: 8, 
    text: `One state government has created Working Holiday Zones, areas in which all manufacturing establishments will be exempted from implementing wage-related laws for a three-year period. They will be required to constitute committees to deal with complaints of sexual harassment and other grievances related to non-wage benefits. Workers across the state have gone on strike in response to the move.`,
    choice1: `The state government argues that this will improve manufacturing output in the state and increase the employment rates of educated youth manifold. The concentration of manufacturing units will also make it easier to manage industrial waste and environmental damage.
    <br><br> 
    Support their move to invite companies to begin setting up units in the Working Holiday Zones.`,
    choice2:`Economic analysts and experts argue that this move will immensely improve economic productivity and allow the state to become an export hub. Deregulation of the entire labour market will further increase the competitiveness of workers.
    <br><br> 
    Support their promotion of the Working Holiday Zones and demand to widen the exemption to all labour laws.`,
    choice3: `Trade unions argue that the move will effectively reduce the wage rate and deny sustenance to thousands. It will disproportionately impact the workers against manufacturers, who will have power over wage rates and all other dispute resolution mechanisms.
    <br><br> 
    Support their demand to disband all Working Holiday Zones and ensure applicability of wage laws to all workers.`,
    delta1: [t, t, -t, t],
    delta2: [2*t, 0, -2*t, t],
    delta3: [0, t, t, -t],
    delta1p:[-1, -1, 1, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, -1],
    delta2p:[-1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, -1, -1],
    delta3p:[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
};

const task9 = {
    index: 9,
    catIndex: 9, 
    text: `A government order requires all news media outlets with less than 50 exclusive reporters to get their content vetted by the Ministry of Information and Broadcasting before publication. Those not complying will face prosecution, including personal liability. Journalists and media houses claim the move interferes with the freedom of the press and threaten to cease publication entirely.`,
    choice1: `The Central Government argues that outlets with few reporters have no on-ground presence and therefore might contribute to spreading misinformation, whether intentionally or otherwise. The vetting process will help them gain credibility and be mentored for future growth.
    <br><br> 
    Support their move to implement the order right away and impose penalties on non-compliant organisations.`,
    choice2:`The Opposition argues that in order to ensure freedom of the press, there should be no government vetting. Instead, reporters should be employed by the government through the UPSC and deputed to various media houses to ensure adequate on-ground reporting.
    <br><br> 
    Support their demand to revoke the order and set up a civil service for reporters.`,
    choice3: `Reporters argue that the order infringes on their freedom to access employment opportunities. After this order, they will to have work exclusively with just one media outlet. It will place editorial constraints on their reporting, hindering press freedom.
<br><br> 
    Support their call to revoke the order and continue to allow freelance reporting.`,
    delta1: [-t, t, -t, t],
    delta2: [-t, t, 0, t],
    delta3: [t, -t, 0, -t],
    delta1p:[0, 0, -1, -1, -1, 0, 0, 0, 0, 1, 1, 0, -1, 0],
    delta2p:[0, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, 0, -1, 0],
    delta3p:[1, 0, 1, 1, 1, 0, 0, 0, 0, -1, -1, 0, 0, 0]
};

const task10 = {
    index: 10,
    catIndex: 10, 
    text: `Leaders of the ruling party have introduced a Constitution Amendment Bill in Parliament to prohibit inter-religious conversions. Recently, newspapers have reported a number of incidents concerning the conversion of people belonging to the majority religion.`,
    choice1: `Members of the ruling party argue that the Bill intends to protect every person's right to their religious beliefs. It is necessary to send a message that the State will not tolerate any aggressive propagation of religion.
    <br><br>
    Support their move to pass the Bill and amend the Fundamental Rights under the Constitution.`,
    choice2:`The Central Government argues that the Bill is critical to ensure the unity and integrity of the nation. In its absence, large-scale religious conversions may damage the social fabric of the country. 
    <br><br>
    Support their move to enact a law under the new Amendment as soon as it is passed and prosecute all offenders with immediate effect.`,
    choice3: `The National Commission of Minorities argues that the ambit of the Bill is too wide and prohibits even voluntary conversions. It adds that each individual must have a right to convert as part of their fundamental religious freedoms.
    <br><br>
    Support their move to oppose the Bill in its entirety and also petition the Supreme Court to prohibit any future amendments to the Fundamental Rights.`,
    delta1: [0, t, -t, t],
    delta2: [0, t, -t, 2*t],
    delta3: [0, -t, t, -t],
    delta1p:[-1, 0, 1, -1, -1, 1, -1, 1, 0, 0, 0, -1, 1, -1],
    delta2p:[-1, 0, -1, -1, 1, -1, -1, -1, -1, 0, 0, -1, 0, -1],
    delta3p:[1, 0, 1, 1, 1, -1, 1, -1, 0, -1, 0, 1, -1, 0]
};

const task11 = {
    index: 11,
    catIndex: 11, 
    text: `The Central Goverment has amended the National Building Code to mandate gender neutral bathrooms in all upcoming public and private establishments. It has notified all metropolitan development authorities to adopt this mandate with immediate effect in granting building permissions.`,
    choice1: `The Centre argues that there is an urgent need to build for inclusivity in all upcoming infrastructure. It states that the additional economic costs are necessary to effectuate the social benefits of practising gender justice.
    <br><br>
    Support the government's move to mandate that all future constructions have gender neutral bathrooms.`,
    choice2:`Private residential builders argue that the government cannot mandate non-technical requirements under a building code. Further, the additional financial costs of land and construction will make low-cost housing unviable.
    <br><br>
    Support their demand to either roll-back this amendment or provide cash subsidies equivalent to the additional costs to be incurred.`,
    choice3: `Influential feminist activists and academics argue that mandating gender neutral bathrooms is likely to lead to an increase in sexual violence against women. They also argue that there were no consultations before developing such a policy proposal.
    <br><br>
    Support their demand to roll back this amendment and initiate public consultations with them and the LGBTQI+ community on policy measures for inclusivity.`,
    delta1: [-t, t, -t, 2*t],
    delta2: [-2*t, t, t, -t],
    delta3: [0, t, 2*t, -2*t],
    delta1p:[1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    delta2p:[-1, 1, 0, 0, 0, 0, 0, 0, -1, -1, 1, 0, 0, 1],
    delta3p:[1, 0, 1, 1, 1, 0, 0, 0, -1, 0, 0, 0, 1, -1]
};

const task12 = {
    index: 12, 
    catIndex: 12, 
    text: `In a Labour Organisation survey it was discovered that women in India spend nine times more than men doing unpaid household work. The State is concerned about the situation and wants these women to be paid salaries to avoid gender disparities as such.`,
    choice1: `The Housewives Association argues  that this provision will recognise household work as a legitimate industry and financially empower women by enhancing their capabilities.
    <br><br>
    Support the Housewives Association in ensuring women's economic empowerment.`,
    choice2: `"Women's Rights Groups argue that this decision will conform gender stereotypes and will limit women into household works only. Since society and even the government want women to be homemakers, they would view this as their only function in society.
    <br><br>
    Support the Women's Rights group against the implementation of this policy which according to them is a step backwards."`,
    choice3: `"The Economists argue that if the government provides a salary to the women involved in household work, it will be paid from the taxpayers money and the taxpayers won't be happy about it. They think an alternative can be by paying a minimum wage only to the women who can't afford domestic help and they participate in household work without gaining anything out of it.
    <br><br>
    Support the Economists in paying a minimum wage to the women who are indulged in househould work and do not have an alternative."`,
    delta1: [t, 2*t, 0, t],
    delta2: [0, 0, 0, 0],
    delta3: [t, t, 0, t],
    delta1p: [1, -1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    delta2p: [-1, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
    delta3p: [1, -1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]
};

const task13 = {
    index: 13, 
    catIndex: 13, 
    text: `The Parliament recently passed the Transgender's Act which gives the right of self-identification to the citizens and for minors the parents will have to make the application on their behalf.`,
    choice1: `"Parents want the children to be assigned to their biological genders until they attain the majority age. They argue because  are minors they are not fully aware about sensitive things like gender identity and need  guidance of parents  with the same. They wouldn't want their children to regret any decision in their lives that they took when they were minors.
    <br><br>
    Support the parents so that they have a say on the gender identity of their children."`,
    choice2: `"Gender Activists argue against this policy because it doesn't allow the children to be the way they want to be. Most of the minors who want to transition are not supported by their families and go through a lot of psychological and physical abuse. Along with the right to self-identify they also want interventioss like puberty blockers to be made accessible to minors.
    <br><br>
    Support the Activists demand to give minors the rights to decide about their own gender identity."`,
    choice3: `"The Oppostition wants Government to open safety homes and centres for children who face any physical or psychological abuse instead of just letting them  have an option of transition at an age when they are not mature enough to do so.
    <br><br>
    Support the Opposition in making safe spaces for the Transgender children."`,
    delta1: [0, -t, 0, -t],
    delta2: [0, -t, 0, -t],
    delta3: [0, t, 0, 0],
    delta1p: [-1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    delta2p: [-1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    delta3p: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
};

const task14 = {
    index: 14, 
    catIndex: 14, 
    text: `The South Asian games are to be hosted in India and the Sports Association has published guidelines that permits participation of  Transgender Women in Women's category. Indian Government claims that allowing transgender women in Women's Sports will erode the integrity of female sport and the movement of women's rights and wants to withdraw as a host from the competition.`,
    choice1: `"Trans Rights Groups argue against the motion and want equality and inclusivity in Women's Sports. They  also want the gender identification tests to be banned because they are humiliating and violative of their Right to Privacy.
    <br><br>
    Support the Transgender Community in making Women's Sports more accepting towards Transgender Women."`,
    choice2: `"Women athlete federation claim that Transgender women will have a physical advantage over them and it will be unfair to the cisgender women participating in the competition. According to them, men phsyically have long hands, torso and legs, denser muscles, greater heart and lung capacity, and that gives them a physiological advantage over others even though they go through Hormone Replacement Therapy.
    <br><br>
    Support the women athletes in keeping Women's Sports all about cis-gender women."`,
    choice3: `"The Sports Association argues that to ensure fairness they test the testosterone levels and keep a check on feminizing hormone therapy of the transgender athletes before letting them participate in the sport. And they only allow the participation once the hormone levels are at par with the cisgender women. They also highlight that factually physical attributes do not play a major role in sports because even cis-gender women have different body types and they still compete against each other.
    <br><br>
    Support the Sports Association demand in making women's sports inclusive of Transgenders with all necessary formalities to make it fair."`,
    delta1: [0, -t, -t, -t],
    delta2: [0, -t, t, 0],
    delta3: [0, -t, t, t],
    delta1p: [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, -1],
    delta2p: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1],
    delta3p: [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
};

const task15 = {
    index: 15, 
    catIndex: 15, 
    text: `The National Council of Education wants to abolish the system of same gender schools across the country.`,
    choice1: `"The Parents associations argue that this decision will take away a safe space from the girls. Gender roles and stereotypes will be more prominent in co-ed schools for example, girls being into art and music while boys will be into sports, while in same-sex schools, everyone will  have the space and opportunity to do everything.
    <br><br>
    Support the Parents Association in having separate schools for the two genders."`,
    choice2: `"The Queer groups and feminists  are in support of this policy,they contend  that co-ed schools will create a more gender sensitised institutions which are inclusive to gender minorities especially gender minorities who do not identify themselves as boy or girl. They also argue that children they can learn to be around different genders, learn how to treat them equally and respectfully and co-exist in harmony.
    <br><br>
    Support the feminists and Queer organisations in making co-ed schools a learning space ."`,
    choice3: `"The minority institutions argue against  same gender schools as seperate gender schools are of a cultural importance and many students will drop-out if they are all made co-ed. Since they are a minority, the State shouldn't impose the co-ed rule on them and should make this policy only limited to public and Government schools.
    <br><br>
    Support the minority institutions in protecting their culture and making this law applicable to Public institutions only."`,
    delta1: [0, -t, -t, -t],
    delta2: [0, t, t, t],
    delta3: [0, -t, 0, -t],
    delta1p: [-1, 0, 1, 1, 1, 0, 0, 0, 0, -1, 0, 0, -1, -1],
    delta2p: [1, 0, -1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    delta3p: [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1]
};

const task16 = {
    index: 16, 
    catIndex: 16, 
    text: `To make educational institutions more inclusive towards LGBTQ+ Community, Council of Education wants to implement gender neutral uniforms and washrooms in educational institutions. It also wants to circulate a manual explaining about different sexualities and genders to sensitise the students and teachers.`,
    choice1: `"The youth Association contend  that this law will be a step forward to break gender stereotypes and it will be easier for young queer students to express themselves the way they want to be. The manual will also help other students and teachers in the educational institutions to learn how to treat and address the queer students respectfully and with dignity.
    <br><br>
    Support the Youth Association in implementation of this law which makes educational institutions an inclusive place for all genders and sexual orientations."`,
    choice2: `"Educational Institutions  argue that it is not their responsibility to educate the students about different orientations because they don't want to impose their thoughts and opinions on the students. The students might have different backgrounds and their parents might want to educate them on these topics their own way. If they are taught different things at different places it might lead to more confusion.
    <br><br>
    Support the educational institutions idea of educating students about Gender and sexual orientations at homes."`,
    choice3: `"The Religious Groups are contending this law. They claim wearing gender-neutral clothes and using the same washroom as the opposite gender wouldn't comply with their religious and cultural beliefs.
    <br><br>
    Support the minority religious groups in preserving their cultural values."`,
    delta1: [0, -t, 0, t],
    delta2: [0, t, 0, -t],
    delta3: [0, -t, 0, -t],
    delta1p: [-1, 0, -1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    delta2p: [-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    delta3p: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
};

// NOTE: Outlive situations [from id=50]
// mod of task13(id=14)
const task49 = {
    index: 49, 
    catIndex: 1, 
    text: `The Parliament recently passed the Transgender Act which is a law that gives citizens the right to identify their gender as per their wishes. If a minor wishes to change their gender identification, then the parents have to make an application on the minor's behalf.`,
    choice1: `Parents want the children to be assigned to their biological genders till they are 18 years old. They argue that because they are minors, they are not fully aware about sensitive things like gender identity and need guidance of parents with the same. They wouldn't want their children to regret any decision in their lives that they took when they were minors.
    <br><br>
    Support the parents so that they have a say on the gender identity of their children.`,
    choice2: `Gender Activists argue against this policy because it doesn't allow the children to be the way they want to be. Most of the minors who want to change their gender are not supported by their families and go through a lot of psychological and physical abuse. This can increase their risk to suicide and other mental health problems. Along with the right to identify their own gender, they also want healthcare services like puberty blockers (medicines that prevent puberty from happening) to be accessible to minors.
    <br><br>
    Support the Activists demand to give minors the rights to decide about their own gender identity.`,
    choice3: `The Oppostition wants Government to open safety homes and centres for children who face any physical or psychological abuse instead of just letting them have an option of changing their gender at an age when they are not mature enough to do so.
    <br><br>
    Support the Opposition in making safe spaces for the Transgender children.`,
    delta1: [0, -t, 0, -t],
    delta2: [0, -t, 0, -t],
    delta3: [0, t, 0, 0],
    delta1p: [-1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    delta2p: [-1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    delta3p: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
};

// mod of task16(id=17)
const task50 = {
    index: 50, 
    catIndex: 2, 
    text: `To make educational institutions more inclusive towards LGBTQIA+ students, Council of Education wants to introduce gender neutral uniforms and toilets in educational institutions. It also wants to distribute a manual explaining about different sexualities and genders to sensitise the students and teachers.`,
    choice1: `The youth association believes that this law will be a step forward to break gender stereotypes and it will be easier for young LGBTQIA+ students to express themselves the way they want to be. The manual will also help other students and teachers in the educational institutions to learn how to treat and address the students respectfully and with dignity. It would also reduce bullying of LGBTQIA+ students, reducing their risk of suicide and other mental health concerns.
    <br><br>
    Support the Youth Association in implementation of this law which makes educational institutions an inclusive place for all genders and sexual orientations.`,
    choice2: `Educational Institutions  argue that it is not their responsibility to educate the students about different sexual and gender identities because they don't want to impose their thoughts and opinions on the students. The students might have different backgrounds and their parents might want to educate them on these topics their own way. If they are taught different things at different places it might lead to more confusion.
    <br><br>
    Support the educational institutions idea of educating students about Gender and sexual orientations at homes.`,
    choice3: `The Religious Groups are against this law. They claim wearing gender-neutral clothes and using the same washroom as the opposite gender would be inappropriate according to their religious and cultural beliefs.
    <br><br>
    Support the religious groups in defending their cultural values.`,
    delta1: [0, -t, 0, t],
    delta2: [0, t, 0, -t],
    delta3: [0, -t, 0, -t],
    delta1p: [-1, 0, -1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    delta2p: [-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    delta3p: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
};

// mod of task2(id=3)
const task51 = {
    index: 51, 
    catIndex: 3, 
    text: `The State Government has planned to create more space for expanding an oil refinery. It is also including the government owned land next to the oil refinery to get more space. This is driving the slum dwellers out of their homes where they had been staying for the last 3 years. The Government says they'll be given new homes in a different area.`,
    choice1: `The state government argues that the expansion is critical to meet the state's energy needs and will also generate many livelihood opportunities.
    <br><br>
    Support their decision to evict the slum-dwellers from the prime land and start the expansion.`,
    choice2: `Civil society organisations representing the evicted slum dwellers argue that the rehabilitation will displace them far away from the city, where they work for their livelihoods. They claim that none of them will be eligible for jobs in the new refinery.
    <br><br>
    Support their demand to provide in-situ rehabilitation to the slum-dwellers and preference in employment at the refinery.`,
    choice3: `Environmentalists argue that the expansion of an oil refinery will put all city residents at risk, while also harming the climate by increasing reliance on fossil fuel-based energy.
    <br><br>
    Support their demand to roll back the expansion plan, shut down the existing plant, and use the space for setting up a solar farm.`,
    delta1: [2*t, t, -t, t],
    delta2: [t, t, -t, -t],
    delta3: [-2*t, -t, t, -t],
    delta1p: [-1, 1, 0, -1, -1, 0, 0, 0, 0, -1, 0, 0, -1, 0],
    delta2p: [1, -1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    delta3p: [0, -1, -1, 1, 1, 0, 0, 0, 0, -1, -1, 0, 1, -1]
};

// mod of task10(id=11)
const task52 = {
    index: 52, 
    catIndex: 4, 
    text: `Leaders of the ruling party have introduced a Constitution Amendment Bill in Parliament to prohibit inter-religious conversions. Recently, newspapers have reported a number of incidents concerning the conversion of people belonging to the majority religion.`,
    choice1: `Members of the ruling party argue that the Bill intends to protect every person's right to their religious beliefs. It is necessary to send a message that the State will not tolerate any aggressive attempts to promote a religion.
    <br><br>
    Support their move to pass the Bill and amend the Fundamental Rights under the Constitution.`,
    choice2: `The Central Government argues that the Bill is critical to ensure the unity and integrity of the nation. In its absence, large-scale religious conversions may damage the social fabric of the country.
    <br><br>
    Support their move to enact a law under the new Amendment as soon as it is passed and prosecute all offenders with immediate effect.`,
    choice3: `The National Commission of Minorities argues that the ambit of the Bill is too wide and prohibits even voluntary conversions. It adds that each individual must have a right to convert as part of their fundamental religious freedoms.
    <br><br>
    Support their move to oppose the Bill in its entirety and also petition the Supreme Court to prohibit any future amendments to the Fundamental Rights.`,
    delta1: [0, t, -t, t],
    delta2: [0, t, -t, 2*t],
    delta3: [0, -t, t, -t],
    delta1p: [-1, 0, 1, -1, -1, 1, -1, 1, 0, 0, 0, -1, 1, -1],
    delta2p: [-1, 0, -1, -1, 1, -1, -1, -1, -1, 0, 0, -1, 0, -1],
    delta3p: [1, 0, 1, 1, 1, -1, 1, -1, 0, -1, 0, 1, -1, 0]
};

// mod of ???
const task53 = {
    index: 53, 
    catIndex: 5, 
    text: `The entry of people belonging to socially excluded communities into a temple in Nerilo has been banned for a very long time. These people have argued that this ban on entry is conflicting with their fundamental right to equality while the management of the religious institution contends that the decision to ban such people is based on a cultural practice of theirs that has been in place for several hundred years and is thus protected as being an essential practice.`,
    choice1: `The members of marginalised community argue that the practice is a violation of their right to equality and equal opportunity. Not being able to access religious places can contribute to feelings of distress and discrimination among people from marginalised communities. Support the demand of marginalised communities to enter and access the temple.`,
    choice2: `The religious temple management claim that the ban on entry of these people is based on traditions and is being prevalent for centuries and is an essential practice of their religion. Support the demand of temple management to maintain status and not allow the members of marginalised community to enter the temple.`,
    choice3: `The local administration argues that this is a very serious matter which if mishandled can disturb the peace and harmony in the region. The local administration suggests that another temple shall be constructed for the marginalised communities next to the local temple and the funding of the mew temple shall be provided by the local temple trust. Support the demand of local administration to keep things unchanged till another temple is built for the marginalised communities.`,
    delta1: [0, -t, t, 0],
    delta2: [0, t, 0, 0],
    delta3: [0, t, 0, 0],
    delta1p: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    delta2p: [-1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, 0, -1],
    delta3p: [0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, -1, 0, -1]
};

// mod of task1(id=2)
const task54 = {
    index: 54, 
    catIndex: 6, 
    text: `The editor of a popular news channel was fired for tweeting about irresponsible reporting of suicide on TV news where they had described the method of suicide, and disclosed private information of the person who died. The management claimed it violated their internal rule against commenting on the channel's affairs. The editor did not explicitly name any specific channel.`,
    choice1: `The TV Editors' Guild argues that editors should be able to express any opinion on social media as long as their speech is protected by the Constitution.
    <br><br>
    Support their demand of reinstating the editor and issuing an apology.`,
    choice2: `The news channel management argues that editors must be more responsible in making statements as they speak to millions of viewers and such an opinion can negatively impact people in distress by increasing their risk of suicide.
    <br><br>
    Support their decision to fire the editor and maintain their no-comment policy.`,
    choice3: `The News Broadcasting Standards Authority (NBSA) argues that such a statement must be taken seriously and investigated further for the benefit of all viewers.
    <br><br>
    Support their stand to temporarily restrict the channel's activities and formulate standard rules for responsible media reporting of suicide.`,
    delta1: [-t, t, t, 0],
    delta2: [t, 0, -t, t],
    delta3: [-2*t, t, 0, t],
    delta1p: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    delta2p: [0, 0, 0, -1, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    delta3p: [0, 0, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
};

const allTasks = {
    1: task0, 
    2: task1, 
    3: task2, 
    4: task3, 
    5: task4, 
    6: task5, 
    7: task6, 
    8: task7, 
    9: task8, 
    10: task9, 
    11: task10, 
    12: task11, 
    50: task49, 
    51: task50, 
    52: task51, 
    53: task52, 
    54: task53, 
    55: task54, 
}

// const situations = [task0,task1,task2,task3,task4,task5,task6,task7,task8,task9,task10,task11];
let situations = [];

// Populate situations based on catego4y
function genSituations() {
    console.log(sessionStorage.category);
    console.log(sessionStorage.language);

    let instanceMap = JSON.parse(categories);

    // Randomise situations
    // instanceMap[sessionStorage.category].sort(() => Math.random() - 0.5).forEach((taskId, index) => {
    instanceMap[sessionStorage.category].forEach((taskId, index) => {
        situations.push(allTasks[taskId]);
    });

    console.log(situations);
}

genSituations();
