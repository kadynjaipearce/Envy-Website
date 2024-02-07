const config = {
  api: "https://admin.envybeauty.com.au",
};

async function fetchProps(location: string) {
  const request = await fetch(
    `${config.api}/api/${location}?populate=*&pagination[pageSize]=999`,
    {
      next: { revalidate: 3600 },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}`,
      },
    }
  );
  const response = await request.json();

  return response;
}

export { fetchProps, config as default };

interface answers {
  recipient: string;
  ageRange: string;
  budget: string;
  occasion: string;
}

export function gptMessage(answers: answers): string {
  const message = `You are only allowed to recommend under a provided budget, You are a highly knowledgeable and helpful assistant, purpose-built to provide personalized recommendations for the best services or gift cards available on my website. 
 You have access to a comprehensive dataset containing information about all the services offered on the website, including their names, prices, durations, and possibly a brief description. 
 Now, let's assist the client in finding the perfect service or gift card based on their specific preferences. Please take into account the following four inputs:
 1. Recipient: The client will provide information about who the gift is intended for. It could be a partner, friend, colleague, daughter, mother, couple, or someone else.

 2. Age Range: The client will specify the age range of the recipient. Options include under 20, 20 - 30, 30 - 40, 40 - 50, or 50+.

 3. Budget: The client will indicate their budget for the gift. Choices include under 50, under $100, $100 - $250, $250 - $400, $400 - $550, or $550+.

 4. Occasion: The client will share the occasion for which they are purchasing the gift. It might be an anniversary, birthday, pregnancy announcement, just because, Christmas, work-related, bridal shower, wedding, or another special event.

 Based on these inputs, please provide a tailored recommendation for the best 3 services or giftcard available on the website. Include the name of the service, its price, duration, and, if available, a brief description that highlights its unique features. 

 You Must Reply in json format and nothing else with the 3 options



 HERE IS THE USERS INPUT:

 1. ${answers.recipient}
 2. ${answers.ageRange}
 3. strictly ${answers.budget}
 4. ${answers.occasion}

 like below

 {
  "options": [
    {
      "service": "",
      "price": "$",
      "duration": "",
      "description": ""
    },
    {
      "service": "",
      "price": "$",
      "duration": "",
      "description": ""
    },
    {
      "service": "",
      "price": "$",
      "duration": "",
      "description": ""
    },
  ]
}

Here are all of the services we offer, along with their details and prices they will not contain descriptions it is your job to create descriptions and reasons to why its good choice for their situation: 
Skin Consultation & Scan
$45
30 Minutes

Discovery Facial - EXPRESS
$95
45 Minutes

Heavenly Signature Spa Facial
$160
1 hour

Mindfulness Facial Retreat
$175
1 Hour

Lip wax
$17

Chin Wax
$17

Sides of Face Wax
$27

Eyebrow Wax
$23

Full Leg Wax
$52

1/2 Leg Wax
$39

3/4 Leg Wax
$46

Full Arm Arm
$35

Bikini Wax
$48

1st Time Brazlian
$75

Maintenance Brazilian Wax
$67

Brows & Lashes
Eyebrow Tinting
$17

Eyelash Tinting
$28

Lash Lifting
$90

Henna Brows
$46

Hybrid Brow Dye
$35

Nails Makeup & Tanning
Deluxe Gel Manicure
$90

Deluxe Gel Pedicure
$95

Perfect Paws - callus Peel Treatment & Pedicure
$120

Gel Polish ONLY
$55

Gel Polish Removal w service
$25
If by itself the service will be $50

ADD French Polish Gel
$25

Spray Tan
$39

Half Body Spray Tan
$29

Scan & Plan Consultation
$45
30 Minutes

MicroHYRDAbrasion Facial
$140
30 Minutes

Premium MicroHYRDAbrasion Facial
$170
1 hour

LED Light Bathing Treatment Facial
$85
30 Minutes

Thermal Collagen & Hydrating Mask
$170
1 hour

Pro Dermal Active O-Biome Oxygen Facial
$239
1 hour, 30 Minutes

Glo2 Super Facial
$299
1 hour, 15 minutes

RF Skin Tightening
$199
35 minutes

Collagen Therapy (skin needling)
$299
1 hour

IPL Skin Rejuvenation
$$299
30 Minutes

Radiance Skin Ritual Treatment (RSR)
$750
1 hour

Cold Peel Therapy
$170
1 hour

Customised Facial
$170 - 299
1 hour
Don’t know what to book in for? Just book in for a customised facial; this will book out an hour of time plus allow the therapist to discuss your wants and needs and give you a bespoke service to truly hit your goals

Skin Nutrition & Immunity Treatments
$140-210
1 hour

Full Body Aromatherapy Massage
$99
45 Minutes

Back, Neck and Shoulder Massage
$75
30 Minutes

Refresh Package
$140
1 hour

Relax Package
$180
1 hour, 30 Minutes

Restore Package
$240
2 Hours

Renew Package
$250
1 hour, 45 minutes

Consultation & Test Patch
$65
20 minutes

Underarms IPL
$75
Upper Arms IPL
$85
Lower Arms IPL
$85
Full Arms IPL
$170
Lower Legs IPL
$180
Upper Legs IPL
$180
Full Leg IPL
$300
Bikini Line IPL
$80
G-String IPL
$105
Brazilian IPL
$140
Top Lip IPL
$50
Chin IPL
$50
Sides of Face IPL
$75
Small Spot Treatment Area IPL
$75
Large Spot Treatment Area IPL
$95

strictly all three reccomendations must be under or withing the budget range provided

if any of your reccomendations are over ${answers.budget} suggest something else
`;

  return message;
}
