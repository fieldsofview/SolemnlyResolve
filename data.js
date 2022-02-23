const t=5;
const task0 = {
    index: 0,
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
    delta3: [t, 2*t, -t, -t],
    delta1p:[-1,0,0,1,1,0,0,0,-1,0,0,0,0,1],
    delta2p:[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    delta3p:[0, 1, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, -1]
};

const task1 = {
    index: 1,
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
    text: `The state government has mandated an increase in the minimum wages to workers across all skill levels. Soon after this increase, garment factory owners have let go of workers to keep costs down, leading to mass lay-offs and retentions only through temporary contracts. The workers are protesting on the streets.`,
    choice1: `The state government argues that revisions in the minimum wage are routinely done. It clarifies that the increase shall only apply to permanent employees and states that any disputes or concerns must be resolved through peaceful discussion.
    <br><br> 
    Support the government's move to end the protests through police action while entirely upholding the wage increase.`,
    choice2:`Global fashion brands argue that factory owners are violating labour laws by laying off workers en-masse. They add that contractual employment takes away employee benefits required by their sourcing agreements with the factories.
    <br><br> 
    Support their call to impose sanctions on all such factories and shift to alternative sourcing from Bangladesh and Indonesia.`,
    choice3: `Garment factory owners argue that the sudden move by the state government has put an enormous financial burden on them. Given the low margins in export of garments, they have to undertake contractual employment to retain some workers. They also argue that the government should not interfere in their freedom of practising their profession. 
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

const situations = [task0,task1,task2,task3,task4,task5,task6,task7,task8,task9,task10,task11];