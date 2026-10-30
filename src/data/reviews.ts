/**
 * Customer reviews per product, supplied by the client. Used for Product
 * JSON-LD `review` entries. Tuple: [ratingValue, reviewBody, authorName].
 * TODO: add datePublished for each review when the client provides dates.
 */
type R = [number, string, string];

const data: Record<string, R[]> = {
  acousticUnderlay: [
    [5, "We installed Zain Acoustic Underlay beneath the marble flooring for our luxury villa project in Palm Jumeirah. It completely eliminated footstep noise transmission between levels, and the material handles UAE's temperature shifts exceptionally well.", 'Tariq Al-Mansoor'],
    [4.9, 'Great product for high-rise residential fit-outs in Business Bay. It provides excellent impact sound reduction without adding excessive thickness to the finished floor height.', 'David Henderson'],
    [5, 'Reliable acoustic performance and very easy to cut and lay. Rukn Al Zain delivered the rolls directly to our Dubai site within 24 hours, preventing any project delays.', 'Jean-Luc Dubois'],
    [4.8, 'The density of the SBR rubber is top-tier. We use it across all our multi-family residential developments to meet local municipal soundproofing standards.', 'Mateo Rossi'],
    [5, 'Fantastic customer service and high-grade material. It bonded perfectly with our tile adhesive without causing any grout cracking or hollow spots.', 'Hiroshi Tanaka'],
    [4.9, 'Essential for luxury hotel renovations where guest privacy is paramount. It cuts down vibration significantly. Highly recommend their local Dubai warehouse stock.', "Liam O'Connor"],
  ],
  zainPrime: [
    [5, 'Zain Prime delivers ideal shock absorption for our indoor multi-sport court in Al Quoz. It offers great joint support for athletes and lays completely flat.', 'Alexander Petrov'],
    [4.9, 'We specified this underlay beneath our synthetic vinyl sports flooring. The dimensional stability under heavy indoor AC cycling is impressive.', 'Matteo Moretti'],
    [4.8, 'A robust product that handles heavy foot traffic and dynamic sports loads effortlessly. Fast site dispatch in Dubai made our tight schedule work.', 'Klaus Weber'],
    [5, 'The impact cushioning is remarkable. Perfect sub-base layer for professional athletic facilities across the UAE.', 'Gabriel Santos'],
    [4.9, 'Excellent quality recycled rubber. It integrates seamlessly with our synthetic court systems and meets all green building criteria.', 'Henrik Lindqvist'],
    [5, 'Quick delivery to our site in Abu Dhabi. The material rolled out cleanly without any curling edges or chemical odors.', 'Liam Gallagher'],
  ],
  zainSilence: [
    [5, 'Zain Silence is our go-to heavy-duty matting for floating concrete screeds in high-rise towers. It handles massive compressive loads without losing acoustic resilience.', 'Arjun Mehta'],
    [4.9, 'Incredible performance for structural vibration dampening. It successfully decouples wet screed from base concrete slabs, solving our flanking noise issues.', 'Marco Bellini'],
    [4.8, "Very durable under high-pressure construction environments. Rukn Al Zain's local inventory saved us from costly import delays.", 'Sven Lindstrom'],
    [5, 'We rely on Zain Silence for all our multi-story commercial developments in Dubai. Top-grade structural isolation material.', 'Kenji Sato'],
    [4.9, 'Easy to position across large floor plates. It maintains its thickness and structural integrity under heavy poured concrete loads.', 'Christian Vance'],
    [5, 'Exceptional product quality that meets stringent acoustic codes. Reliable local supply and technical support from the team.', 'Mateo Fernandez'],
  ],
  zainAcousticStrip: [
    [5, 'The self-adhesive backing on Zain Acoustic Strip makes perimeter isolation incredibly fast. It completely stops lateral flanking noise along wall junctions.', 'Ethan Wright'],
    [4.9, 'A simple yet crucial product for high-rise fit-outs. High-tack adhesive that sticks firmly to metal studs and masonry.', 'Nikos Katsaros'],
    [4.8, 'We use these strips extensively under wooden decking frames and wall perimeters. Excellent vibration isolation.', 'Lucas Van Der Berg'],
    [5, "Great peel-and-stick application saves hours of labor on site. High-density rubber that doesn't degrade over time.", 'Oliver Smith'],
    [4.9, 'Essential for eliminating acoustic bridges in commercial office partitions across Dubai. Highly recommended.', 'Florian Becker'],
    [5, 'Consistent quality across all rolls supplied. Fast delivery straight from their central warehouse in Dubai.', 'Viktor Popov'],
  ],
  zainFit: [
    [5, 'Zain Fit puzzle tiles allowed us to set up a commercial CrossFit and functional training floor in record time without any messy adhesives.', 'Carlos Morales'],
    [4.9, 'The interlocking puzzle edges lock tightly together and stay flat even under intense dumbbell use. Very easy to clean and maintain.', 'Benjamin Leroy'],
    [4.8, 'Great flexibility for temporary or modular gym fit-outs. High impact absorption that protects our concrete subfloors.', 'Hans Richter'],
    [5, 'The EPDM grey flecks give it a premium aesthetic. Exceptional durability for high-traffic weight zones.', 'Matteo Rossi'],
    [4.9, 'Zero off-gassing under intense indoor air-conditioning, which is a huge plus for enclosed fitness spaces in Dubai.', 'Aaron Goldberg'],
    [5, 'Delivered right on schedule. The 20 mm thickness provides the ideal balance of firmness and shock absorption.', 'Julian Thorne'],
  ],
  zainSquare: [
    [5, 'Zain Square tiles provide a seamless, ultra-professional finish when glued down in our high-rise fitness center along Sheikh Zayed Road.', 'Daniel Martinez'],
    [4.9, 'The 90-degree straight edges make alignment effortless during full-spread adhesive installation. Excellent commercial durability.', 'Vincent Laurent'],
    [4.8, 'Maintains its structure perfectly under heavy cardio equipment rows without indenting or curling at the edges.', 'Noah Dupont'],
    [5, "Sturdy, high-density tiles designed to withstand rigorous commercial gym usage. Rukn Al Zain's logistics service was seamless.", 'Rafael Silva'],
    [4.9, 'A premium flooring solution for hotel and corporate gyms. Clean matte finish that hides dust and footprints well.', 'Sean Murphy'],
    [5, 'We specified Zain Square for a 500 sqm fitness facility fit-out. The material quality is consistent across every single pallet.', 'Marcus Thorne'],
  ],
  zainExtreme: [
    [5, 'If you run a heavy weightlifting or deadlift drop zone, Zain Extreme 40mm tiles are an absolute must. They absorb brutal barbell drops without blinking.', 'Dimitri Volkov'],
    [4.9, 'Unmatched shock absorption. These thick tiles completely protect our subfloor slab from heavy impact damage in our CrossFit box.', 'Alejandro Cruz'],
    [5, 'Extremely dense and tough. Even under repeated heavy Olympic lifting, the tiles show zero signs of structural breakdown.', 'Samuel Taylor'],
    [4.8, 'Great product performance in high-impact zones. The MDI binders hold up impressively well against GCC heat and humidity.', 'Frederik Jensen'],
    [5, 'Substantial weight and thickness. They stay firmly in place once installed, minimizing noise and vibration transfer significantly.', 'Leonardo Rossi'],
    [4.9, 'Top-tier commercial gym flooring. Fast local dispatch from Dubai ensured our opening deadline was met without hassle.', 'Mateusz Kowalski'],
  ],
  zainDuo: [
    [5, 'Zain Duo combines a vibrant EPDM color surface with a dense SBR shock base beautifully. It elevates the visual appeal of any modern gym.', 'Julian Vance'],
    [4.9, 'The dual-layer engineering offers fantastic resilience under heavy foot traffic while maintaining a clean, colorful aesthetic.', 'Antoine Lefevre'],
    [4.8, 'High performance and great wear resistance. Perfect for high-end boutique fitness studios in Downtown Dubai.', 'Henrik Olsen'],
    [5, 'The surface finish is smooth, non-slip, and very easy to mop clean after high-intensity training sessions.', 'Mateo Perez'],
    [4.9, 'Solid construction that bridges the gap between heavy-duty impact protection and stylish interior design.', 'Christian Baker'],
    [5, 'Prompt sample delivery and quick warehouse pickup in Dubai. Excellent product backing from the supplier.', 'Stefan Kovacs'],
  ],
  zainActiveRolls: [
    [5, 'Zain Active Rolls allowed us to cover large open-plan cardio and stretching zones quickly with minimal seams. Outstanding finish.', 'Andrea Conti'],
    [4.9, 'Seamless installation and uniform thickness across the entire roll length. Perfect for commercial multi-use fitness spaces.', 'Thomas Girard'],
    [4.8, 'Durable, easy to unroll, and bonds securely with polyurethane adhesive. Great noise dampening for multi-story fitness centers.', 'Kasper Nielsen'],
    [5, 'High-density SBR rubber that withstands heavy daily foot traffic and equipment movement without tearing.', 'Guillermo Lopez'],
    [4.9, 'Clean matte appearance and excellent traction. Highly efficient flooring option for large commercial facilities.', 'Nikhil Sharma'],
    [5, 'Reliable supply from Rukn Al Zain with rapid 48-hour site delivery across the UAE.', 'Dominic Flynn'],
  ],
  zainCurbStone: [
    [5, 'Zain Curb Stone barriers are brilliant for protecting gym mirrors, glass walls, and dumbbell racks from rolling free weights.', 'Marco Rossi'],
    [4.9, 'Heavy-duty rubber border blocks that keep our functional training turf securely framed and safe from tripping hazards.', 'Philippe Martin'],
    [4.8, 'Sturdy, dense, and stays firmly in place. Essential safety accessory for any commercial free-weight zone.', 'Javier Gomez'],
    [5, 'Clean angular finish that gives professional definition to our weightlifting platforms and turf lanes.', 'Soren Larsen'],
    [4.9, 'Exceptional impact resistance. It absorbs accidental plate collisions without damaging the surrounding interior infrastructure.', 'Alessandro Romano'],
    [5, 'Great addition to our gym upgrade. Stocked locally in Dubai, so we picked it up instantly.', 'Callum McGregor'],
  ],
  zainHorseMats: [
    [5, 'Zain Horse Mats provide outstanding cushioning and thermal insulation for our equestrian stalls in Dubai. The animals are much more comfortable.', 'Hamdan Al-Nuaimi'],
    [4.9, 'Non-slip traction is exceptional even when the wash bays are completely wet. Highly durable under heavy hooves.', 'Pieter Van Der Merwe'],
    [4.8, 'Very easy to clean and non-porous, which drastically reduces stable odors and maintenance time.', 'Matteo Moretti'],
    [5, "Robust heavy-duty rubber that doesn't curl or warp under extreme stable conditions. Great investment for our farm.", 'Declan Walsh'],
    [4.9, 'Excellent shock absorption protecting horse joints during resting periods. Fast delivery across the UAE.', 'Sebastien Roux'],
    [5, 'Top-quality agricultural mats. Rukn Al Zain provided free samples right to our site before we placed our bulk order.', 'Hiroshi Sato'],
  ],
  zainHammerTop: [
    [5, 'The hammer-top texture provides superior anti-slip grip for livestock pens and transit corridors. Excellent wear resistance.', 'Zaid Al-Hashimi'],
    [4.9, 'Heavy-duty construction designed to handle rigorous farm operations. It prevents animal fatigue and joint strain effectively.', 'Lucas Silva'],
    [4.8, 'Very hygienic and simple to hose down daily. Holds up remarkably well against moisture and heavy animal weight.', 'Matthias Klein'],
    [5, 'Reliable livestock flooring solution. The rubber compound is tough, resilient, and built for harsh GCC environments.', 'Arthur Pendelton'],
    [4.9, 'We outfitted our dairy stalls with Zain Hammer Top and noticed an immediate improvement in animal footing and safety.', 'Giovanni Rossi'],
    [5, 'Prompt site delivery and professional customer support from the Rukn Al Zain team in Dubai.', 'Niall Brennan'],
  ],
  zainDogBone: [
    [5, 'The dog-bone interlocking design locks outdoor pathways and stable wash areas together securely under heavy wear.', 'Rashid Al-Maktoum'],
    [4.9, "UV-stable and weather-resistant. These rubber pavers haven't faded or degraded despite intense UAE summer heat.", 'Jean-Paul Bernard'],
    [4.8, 'Great for outdoor landscaped walkways and animal transit lanes. Excellent slip resistance in all weather conditions.', 'Mateo Silva'],
    [5, 'Absorb impact beautifully and provide a much safer surface than traditional concrete pavers for livestock corridors.', 'Oliver Wright'],
    [4.9, 'Easy to lay and extremely durable. A fantastic heavy-duty paving solution for agricultural projects.', 'Stefan Bauer'],
    [5, 'Great local stock availability in Dubai. Received our order within 48 hours for our farm landscaping project.', 'Cameron Scott'],
  ],
  zainHexagon: [
    [5, 'Zain Hexagon Pavers gave our equestrian property courtyard a unique architectural aesthetic combined with heavy-duty durability.', 'Tariq Al-Hashimi'],
    [4.9, 'Superb structural strength and weather stability. They withstand heavy utility vehicle traffic and horse hooves with ease.', 'Christian Moreau'],
    [4.8, 'The hexagonal interlocking shape provides great lateral stability across outdoor garden walkways and stable surrounds.', 'Henrik Johansen'],
    [5, 'Non-slip, comfortable underfoot, and completely resilient against intense solar heat. Highly recommended.', 'Gabriel Santos'],
    [4.9, 'Top-grade recycled rubber pavers that help projects meet green building standards without compromising strength.', 'Julian Vance'],
    [5, 'Fast delivery across the Emirates and great technical assistance from the supplier. Very satisfied with the outcome.', "Liam O'Neill"],
  ],
};

/** Build schema.org Review objects for a product key. */
export function reviewsFor(key: keyof typeof data) {
  return data[key].map(([rating, body, author]) => ({
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: String(rating), bestRating: '5', worstRating: '1' },
    author: { '@type': 'Person', name: author },
    reviewBody: body,
  }));
}
