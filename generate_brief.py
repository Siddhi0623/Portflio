"""Generate a portfolio content brief PDF for handing to an AI design agent."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    ListFlowable, ListItem, KeepTogether, HRFlowable
)
from reportlab.lib.enums import TA_LEFT

OUT_PATH = r"C:\Users\xesid\OneDrive\Desktop\portfolio\Siddhi-Kale-Portfolio-Brief.pdf"

INK = HexColor("#0f172a")
SLATE_700 = HexColor("#334155")
SLATE_500 = HexColor("#64748b")
ACCENT = HexColor("#6366f1")
ACCENT2 = HexColor("#8b5cf6")
SURFACE = HexColor("#f8fafc")
BORDER = HexColor("#e2e8f0")

styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    "H1", parent=styles["Heading1"], fontName="Helvetica-Bold",
    fontSize=24, leading=28, textColor=INK, spaceAfter=4, spaceBefore=0
)
H2 = ParagraphStyle(
    "H2", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=15, leading=19, textColor=INK, spaceBefore=14, spaceAfter=6
)
H3 = ParagraphStyle(
    "H3", parent=styles["Heading3"], fontName="Helvetica-Bold",
    fontSize=12, leading=15, textColor=INK, spaceBefore=8, spaceAfter=3
)
EYEBROW = ParagraphStyle(
    "Eyebrow", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=8, leading=10, textColor=ACCENT, spaceAfter=2
)
BODY = ParagraphStyle(
    "Body", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=10, leading=14, textColor=SLATE_700, spaceAfter=4, alignment=TA_LEFT
)
MUTED = ParagraphStyle(
    "Muted", parent=BODY, textColor=SLATE_500, fontSize=9, leading=12
)
META = ParagraphStyle(
    "Meta", parent=BODY, fontSize=9, leading=12, textColor=SLATE_500
)
TAG = ParagraphStyle(
    "Tag", parent=BODY, fontName="Helvetica-Bold",
    fontSize=8, leading=10, textColor=ACCENT
)


def eyebrow(text):
    return Paragraph(text.upper(), EYEBROW)


def hr():
    return HRFlowable(width="100%", thickness=0.4, color=BORDER, spaceBefore=8, spaceAfter=8)


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(it, BODY), leftIndent=8, value="circle") for it in items],
        bulletType="bullet", leftIndent=12, bulletColor=ACCENT, bulletFontSize=6
    )


def chip_row(items):
    """Render skill chips as a wrapped row using a table."""
    cells = [Paragraph(f"<font color='#475569'>{i}</font>", MUTED) for i in items]
    # group into rows of 4
    rows = []
    for i in range(0, len(cells), 4):
        chunk = cells[i:i + 4]
        while len(chunk) < 4:
            chunk.append(Paragraph("", MUTED))
        rows.append(chunk)
    if not rows:
        return Spacer(1, 0)
    t = Table(rows, colWidths=[42 * mm] * 4, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), SURFACE),
        ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return t


def header_block():
    name = Paragraph("Siddhi Kale", H1)
    headline = Paragraph(
        '<font color="#6366f1"><b>Full Stack Developer</b></font> &nbsp;·&nbsp; '
        'MERN Stack &nbsp;·&nbsp; Building scalable web applications',
        BODY
    )
    contact = Paragraph(
        "<b>Email:</b> xesiddhikale51@gmail.com &nbsp;&nbsp; "
        "<b>Phone:</b> +91 94225 54886<br/>"
        "<b>Location:</b> Pune / Pimpri-Chinchwad, India<br/>"
        "<b>LinkedIn:</b> linkedin.com/in/siddhikale2306<br/>"
        "<b>Profile photo:</b> Photo.jpeg (face-zoomed crop on circular avatar)",
        META
    )
    return [name, Spacer(1, 4), headline, Spacer(1, 10), contact, hr()]


def project_card(title, tag, summary, highlights, stack, live):
    head = Paragraph(f"<b>{title}</b>", H3)
    meta = Paragraph(
        f'<font color="#6366f1"><b>{tag}</b></font>  ·  '
        f'<font color="#64748b">Live: <a href="{live}" color="#6366f1">{live}</a></font>',
        META
    )
    summ = Paragraph(summary, BODY)
    hl = bullets(highlights)
    stack_p = Paragraph(
        "<b>Stack:</b> " + " · ".join(stack),
        MUTED
    )
    inner = [head, meta, Spacer(1, 3), summ, Spacer(1, 4), hl, Spacer(1, 4), stack_p]
    t = Table([[inner]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), white),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return KeepTogether([t, Spacer(1, 8)])


def journey_item(period, role, org, type_, details):
    dot = "● Work" if type_ == "work" else "○ Education"
    color = "#6366f1" if type_ == "work" else "#10b981"
    head = Paragraph(
        f'<font color="{color}"><b>{dot}</b></font> &nbsp; '
        f'<b>{role}</b> · <font color="#475569">{org}</font>',
        BODY
    )
    sub = Paragraph(f'<font color="#64748b">{period}</font>', META)
    block = [head, sub]
    if details:
        block += [Spacer(1, 3), bullets(details)]
    return KeepTogether(block + [Spacer(1, 8)])


def build():
    doc = SimpleDocTemplate(
        OUT_PATH, pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm,
        title="Siddhi Kale — Portfolio Content Brief",
        author="Siddhi Kale"
    )

    story = []

    # Cover header
    story.append(eyebrow("Portfolio content brief"))
    story += header_block()

    # Brief instructions for the AI designer
    story.append(eyebrow("How to use this document"))
    story.append(Paragraph(
        "This is a content-only brief. Hand it to any AI design agent and ask it to "
        "build a portfolio website using the text below. The site should include all "
        "sections in this document. Visual style is open — pick a design that fits the "
        "tone (clean, modern, professional, slightly playful). Keep the voice "
        "conversational and human; do not rewrite the copy in stiff corporate language.",
        BODY
    ))
    story.append(hr())

    # About
    story.append(eyebrow("About"))
    story.append(Paragraph("A little about who I am", H2))
    story.append(Paragraph(
        "I'm a Computer Engineering student from Pune who got hooked on web "
        "development somewhere around my second year and hasn't really stopped since. "
        "Most of my time goes into building things with React, Node, and Express — "
        "and figuring out how to make them feel fast and intuitive.",
        BODY
    ))
    story.append(Paragraph(
        "I work as a Full Stack Developer at <b>CodeServeTech Pvt Ltd</b>, where I get "
        "to ship real features for real users. Before that, I trained as a web "
        "developer at Corizo, which is where the foundation really started taking "
        "shape. The thing I enjoy most is the loop — sketch an idea, build it, watch "
        "someone use it, then go back and make it better.",
        BODY
    ))
    story.append(Paragraph(
        "Outside of code I'm usually exploring new tools, reading about system "
        "design, or working through a side project. I'm always open to interesting "
        "problems and teams that care about craft.",
        BODY
    ))
    story.append(hr())

    # Skills
    story.append(eyebrow("Skills"))
    story.append(Paragraph("What I work with day to day", H2))
    skill_groups = [
        ("Frontend", ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
                       "Tailwind CSS", "jQuery", "React Router", "Axios"]),
        ("Backend", ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Mongoose ODM"]),
        ("Databases", ["MongoDB", "SQL"]),
        ("Tools & Platforms", ["Git & GitHub", "Linux", "Vercel", "Postman", "VS Code"]),
    ]
    for title, items in skill_groups:
        story.append(Paragraph(title, H3))
        story.append(chip_row(items))
        story.append(Spacer(1, 6))
    story.append(hr())

    # Projects
    story.append(PageBreak())
    story.append(eyebrow("Things I've built"))
    story.append(Paragraph("Work I'm proud of", H2))
    story.append(Paragraph(
        "A few projects I built end-to-end and learned a lot from. Happy to walk "
        "through the code, design choices, and tradeoffs if you want a closer look.",
        BODY
    ))
    story.append(Spacer(1, 8))

    story.append(project_card(
        title="ShopLux — Premium Fashion Store",
        tag="Full Stack E-Commerce",
        summary=("A complete online shopping experience for a premium fashion brand — "
                 "product catalog, search, cart, checkout, and a clean admin panel. "
                 "Built end-to-end so it actually feels like a real store, not a demo."),
        highlights=[
            "JWT-based authentication and protected routes for users and admins",
            "Cart and order flow with persistent state and order history",
            "Admin dashboard for managing products, stock, and orders",
            "Responsive UI with Tailwind, optimised for mobile checkout",
        ],
        stack=["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
        live="https://shoplux-delta.vercel.app/",
    ))

    story.append(project_card(
        title="AI Spend Audit — SaaS Cost Optimizer",
        tag="Full Stack · SaaS",
        summary=("A free audit tool that helps startups and engineering teams cut "
                 "wasted spend on AI subscriptions. Users plug in their tool stack "
                 "and get a transparent, no-BS breakdown of where they're overpaying "
                 "— in under 3 minutes."),
        highlights=[
            "Analyzes 8+ AI tools (Cursor, Claude, Copilot, ChatGPT, Gemini, OpenAI & Anthropic APIs)",
            "Plan-tier and redundancy detection with right-sized recommendations",
            "Compares API credits vs. retail pricing and annual-billing discounts",
            "Clean, minimal landing flow with numbered steps and testimonial proof",
        ],
        stack=["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
        live="https://ai-audit-spend-eight.vercel.app/",
    ))

    story.append(project_card(
        title="PulseFit Coaching — Fitness Platform",
        tag="Frontend · Marketing Site",
        summary=("A modern coaching website for a fitness brand offering 1:1 training, "
                 "mobility, and lean-strength programs. Designed to convert — built "
                 "with clear program tiers, transparent pricing, and a WhatsApp-"
                 "integrated contact flow."),
        highlights=[
            "Three program tracks: Strength Reset, Lean & Mobile, 1:1 Transformation",
            "Tiered pricing (4 / 8 / 12-week) with a highlighted Momentum plan",
            "WhatsApp-integrated lead form for instant client onboarding",
            "Responsive, photography-led layout with clean typography",
        ],
        stack=["Next.js", "React", "Tailwind CSS", "Vercel"],
        live="https://fitness-next-js-website.vercel.app/",
    ))

    story.append(hr())

    # Journey
    story.append(PageBreak())
    story.append(eyebrow("My journey"))
    story.append(Paragraph("How I got here", H2))
    story.append(Paragraph(
        "A quick look at the path so far — the jobs, the training, and the schools "
        "that shaped the way I build.", BODY
    ))
    story.append(Spacer(1, 8))

    timeline = [
        dict(period="May 2026 — Present", role="Full Stack Developer",
             org="CodeServeTech Pvt Ltd", type_="work", details=[
                 "Building production web apps end-to-end with the MERN stack",
                 "Designing REST APIs, auth flows, and database schemas",
                 "Working with the team on UI, performance, and code reviews",
             ]),
        dict(period="Jan 2024 — Feb 2024", role="Web Development Trainee",
             org="Corizo", type_="work", details=[
                 "Built responsive websites with HTML, CSS, JavaScript, and jQuery",
                 "Translated brand guidelines into clean, accessible front-end pages",
                 "Got hands-on with the full build-test-ship loop for the first time",
             ]),
        dict(period="Aug 2023 — Aug 2027", role="B.Tech Computer Engineering",
             org="Nutan College of Engineering & Research", type_="edu", details=[
                 "Core CS: data structures, OS, networks, databases",
                 "Self-driven focus on full-stack web development outside coursework",
             ]),
        dict(period="Mar 2023", role="HSC (12th)",
             org="S.M. Joshi Junior College, Pune", type_="edu", details=[]),
        dict(period="Mar 2021", role="SSC (10th)",
             org="Sadhana English Medium School", type_="edu", details=[]),
    ]
    for t in timeline:
        story.append(journey_item(**t))

    story.append(hr())

    # Certifications
    story.append(eyebrow("Certifications"))
    story.append(Paragraph("Always learning", H2))
    certs = [
        ("Web Development", "Udemy"),
        ("Web Development", "Apna College"),
        ("100 Days of Code: Python Pro Bootcamp", "Udemy"),
        ("Data Science", "Internshala"),
        ("Microsoft Excel (Advanced)", "Udemy"),
        ("Tableau Certified", "Tableau"),
        ("IBM Certification", "IBM"),
    ]
    cert_data = [[Paragraph(f"<b>{n}</b>", BODY), Paragraph(i, META)] for n, i in certs]
    t = Table(cert_data, colWidths=[110 * mm, 60 * mm], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), white),
        ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(t)
    story.append(hr())

    # Get in touch
    story.append(eyebrow("Get in touch"))
    story.append(Paragraph("Let's build something together", H2))
    story.append(Paragraph(
        "I'm open to full-time roles, freelance projects, and interesting "
        "collaborations. If you think we'd work well together, drop me a line — "
        "I usually reply within a day.", BODY
    ))
    contact_table = Table([
        [Paragraph("<b>Email</b>", META), Paragraph(
            '<a href="mailto:xesiddhikale51@gmail.com" color="#6366f1">xesiddhikale51@gmail.com</a>', BODY)],
        [Paragraph("<b>Phone</b>", META), Paragraph(
            '<a href="tel:+919422554886" color="#6366f1">+91 94225 54886</a>', BODY)],
        [Paragraph("<b>WhatsApp</b>", META), Paragraph(
            '<a href="https://wa.me/919422554886" color="#6366f1">wa.me/919422554886</a>', BODY)],
        [Paragraph("<b>LinkedIn</b>", META), Paragraph(
            '<a href="https://www.linkedin.com/in/siddhikale2306" color="#6366f1">linkedin.com/in/siddhikale2306</a>', BODY)],
        [Paragraph("<b>Location</b>", META), Paragraph(
            "Pune / Pimpri-Chinchwad, India", BODY)],
    ], colWidths=[35 * mm, 135 * mm], hAlign="LEFT")
    contact_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), white),
        ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(contact_table)

    story.append(hr())

    # Notes
    story.append(eyebrow("Notes for the AI designer"))
    notes = [
        "Use a single profile photo (face-zoomed circular crop). Source filename: Photo.jpeg.",
        "Keep the writing voice as-is — conversational, not corporate. Don't rewrite copy to sound formal.",
        "All section headings (About, Skills, Things I've built, My journey, Always learning, Get in touch) should be present.",
        "Status chip: 'Open to full-time roles' near the hero.",
        "Hero tagline: 'Hi, I'm Siddhi Kale. I build web apps that actually ship.'",
        "Primary CTA: 'See my work' (anchor to projects). Secondary CTA: 'Let's talk' (anchor to contact).",
        "Make every contact channel clickable: mailto for email, tel for phone, WhatsApp deep link, LinkedIn URL.",
        "Stack badge near hero: 'MERN • Full Stack'.",
    ]
    story.append(bullets(notes))

    doc.build(story)
    print("PDF written to:", OUT_PATH)


if __name__ == "__main__":
    build()
