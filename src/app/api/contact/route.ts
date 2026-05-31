import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation basique côté serveur
    const required = [
      "firstName",
      "lastName",
      "company",
      "phone",
      "email",
      "employees",
      "revenue",
    ];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        );
      }
    }

    // Intégration CRM — décommenter et configurer selon votre CRM :
    //
    // HubSpot:
    // await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ properties: { ...body } }),
    // });
    //
    // Salesforce, Pipedrive, etc. — même principe

    console.log("[Contact Form]", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du formulaire" },
      { status: 500 }
    );
  }
}
