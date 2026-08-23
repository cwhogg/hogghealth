import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import {
  experience,
  education,
  patents,
  publications,
  projects,
  bio,
} from "@/data/cv";

Font.register({
  family: "Playfair Display",
  fonts: [{ src: "/fonts/playfair-display-700.woff", fontWeight: 700 }],
});

Font.register({
  family: "Lora",
  fonts: [
    { src: "/fonts/lora-400.woff", fontWeight: 400, fontStyle: "normal" },
    { src: "/fonts/lora-400-italic.woff", fontWeight: 400, fontStyle: "italic" },
  ],
});

Font.register({
  family: "Merriweather",
  fonts: [
    { src: "/fonts/merriweather-400.woff", fontWeight: 400 },
    { src: "/fonts/merriweather-700.woff", fontWeight: 700 },
  ],
});

Font.register({
  family: "DM Sans",
  fonts: [
    { src: "/fonts/dm-sans-400.woff", fontWeight: 400 },
    { src: "/fonts/dm-sans-500.woff", fontWeight: 500 },
    { src: "/fonts/dm-sans-600.woff", fontWeight: 600 },
    { src: "/fonts/dm-sans-700.woff", fontWeight: 700 },
  ],
});

const color = {
  background: "#FAFAF5",
  surface: "#FFFFFF",
  foreground: "#1C1917",
  body: "#44403C",
  muted: "#78716C",
  accent: "#B91C1C",
  teal: "#0F766E",
  rule: "#D6D3D1",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: color.surface,
    color: color.body,
    fontFamily: "Merriweather",
    fontSize: 9,
    paddingTop: 28,
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  headerBand: {
    backgroundColor: color.foreground,
    marginHorizontal: -40,
    marginTop: -28,
    paddingHorizontal: 40,
    paddingTop: 26,
    paddingBottom: 20,
    marginBottom: 18,
  },
  name: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: 26,
    color: "#FAFAF5",
    marginBottom: 4,
  },
  tagline: {
    fontFamily: "Lora",
    fontStyle: "italic",
    fontSize: 11,
    color: "#E7E5E4",
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  contactItem: {
    fontFamily: "DM Sans",
    fontSize: 8,
    color: "#D6D3D1",
  },
  contactLink: {
    fontFamily: "DM Sans",
    fontSize: 8,
    color: "#5EEAD4",
    textDecoration: "none",
  },
  sectionLabel: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 8.5,
    color: color.accent,
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 8,
    marginTop: 4,
  },
  summary: {
    fontFamily: "Merriweather",
    fontSize: 9,
    lineHeight: 1.5,
    color: color.body,
    marginBottom: 16,
  },
  rule: {
    borderBottomWidth: 0.75,
    borderBottomColor: color.rule,
    marginBottom: 14,
  },
  job: {
    marginBottom: 11,
  },
  jobHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  companyName: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: 12.5,
    color: color.foreground,
  },
  exitBadge: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 6.5,
    color: color.teal,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  locationText: {
    fontFamily: "DM Sans",
    fontSize: 7.5,
    color: color.muted,
    marginBottom: 3,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  roleTitle: {
    fontFamily: "DM Sans",
    fontWeight: 600,
    fontSize: 9,
    color: color.foreground,
  },
  roleDates: {
    fontFamily: "DM Sans",
    fontSize: 8,
    color: color.muted,
  },
  jobDescription: {
    fontFamily: "Merriweather",
    fontSize: 8.5,
    lineHeight: 1.45,
    color: color.body,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 2,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 8.5,
    color: color.accent,
    width: 8,
  },
  bulletText: {
    fontFamily: "Merriweather",
    fontSize: 8.5,
    lineHeight: 1.4,
    color: color.body,
    flex: 1,
  },
  twoCol: {
    flexDirection: "row",
    gap: 24,
  },
  col: {
    flex: 1,
  },
  eduCard: {
    marginBottom: 10,
  },
  eduSchool: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 9,
    color: color.foreground,
    marginBottom: 1,
  },
  eduDegree: {
    fontFamily: "Lora",
    fontStyle: "italic",
    fontSize: 8.5,
    color: color.body,
    marginBottom: 1,
  },
  eduDates: {
    fontFamily: "DM Sans",
    fontSize: 7.5,
    color: color.muted,
  },
  patentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    gap: 8,
  },
  patentTitle: {
    fontFamily: "DM Sans",
    fontSize: 7.5,
    color: color.foreground,
    flex: 1,
    lineHeight: 1.35,
  },
  patentDate: {
    fontFamily: "DM Sans",
    fontSize: 7,
    color: color.muted,
    width: 90,
    textAlign: "right",
  },
  pubRow: {
    marginBottom: 7,
  },
  pubTitle: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 8.5,
    color: color.foreground,
    lineHeight: 1.35,
  },
  pubMeta: {
    fontFamily: "Lora",
    fontStyle: "italic",
    fontSize: 7.5,
    color: color.body,
    marginTop: 1,
  },
  pubIds: {
    fontFamily: "DM Sans",
    fontSize: 6.5,
    color: color.muted,
    marginTop: 1,
  },
  projectRow: {
    marginBottom: 7,
  },
  projectNameRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  projectName: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 8.5,
    color: color.foreground,
  },
  projectTagline: {
    fontFamily: "Lora",
    fontStyle: "italic",
    fontSize: 7.5,
    color: color.muted,
  },
  projectTech: {
    fontFamily: "DM Sans",
    fontSize: 6.5,
    color: color.teal,
    marginTop: 1,
  },
  projectUrl: {
    fontFamily: "DM Sans",
    fontSize: 6.5,
    color: color.accent,
    marginTop: 1,
    textDecoration: "none",
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontFamily: "DM Sans",
    fontSize: 6.5,
    color: color.muted,
  },
});

export function CVDocument() {
  const recentJobs = experience.slice(0, 4);
  const earlierJobs = experience.slice(4);

  return (
    <Document
      title="Chris Hogg — CV"
      author={bio.name}
      subject="Curriculum Vitae"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.headerBand}>
          <Text style={styles.name}>{bio.name}</Text>
          <Text style={styles.tagline}>{bio.tagline}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{bio.location}</Text>
            <Link style={styles.contactLink} src={`mailto:${bio.email}`}>
              {bio.email}
            </Link>
            <Link style={styles.contactLink} src={`https://${bio.linkedin}`}>
              {bio.linkedin}
            </Link>
            <Link style={styles.contactLink} src={`https://${bio.x}`}>
              {bio.x}
            </Link>
          </View>
        </View>

        <Text style={styles.summary}>{bio.summary}</Text>

        <Text style={styles.sectionLabel}>Experience</Text>
        <View style={styles.rule} />

        {recentJobs.map((job, i) => (
          <View key={i} style={styles.job} wrap={false}>
            <View style={styles.jobHeaderRow}>
              <Text style={styles.companyName}>{job.company}</Text>
              {job.exit && <Text style={styles.exitBadge}>{job.exit}</Text>}
            </View>
            <Text style={styles.locationText}>{job.location}</Text>
            {job.roles.map((role, j) => (
              <View key={j} style={styles.roleRow}>
                <Text style={styles.roleTitle}>{role.title}</Text>
                <Text style={styles.roleDates}>{role.dates}</Text>
              </View>
            ))}
            <Text style={[styles.jobDescription, { marginTop: 2 }]}>
              {job.description}
            </Text>
            {job.bullets?.map((b, k) => (
              <View key={k} style={styles.bulletRow}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {bio.name} — {bio.email}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>

      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionLabel}>Experience, continued</Text>
        <View style={styles.rule} />

        {earlierJobs.map((job, i) => (
          <View key={i} style={styles.job} wrap={false}>
            <View style={styles.jobHeaderRow}>
              <Text style={styles.companyName}>{job.company}</Text>
              {job.exit && <Text style={styles.exitBadge}>{job.exit}</Text>}
            </View>
            <Text style={styles.locationText}>{job.location}</Text>
            {job.roles.map((role, j) => (
              <View key={j} style={styles.roleRow}>
                <Text style={styles.roleTitle}>{role.title}</Text>
                <Text style={styles.roleDates}>{role.dates}</Text>
              </View>
            ))}
            <Text style={[styles.jobDescription, { marginTop: 2 }]}>
              {job.description}
            </Text>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {bio.name} — {bio.email}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>

      <Page size="LETTER" style={styles.page}>
        <View style={styles.twoCol} wrap={false}>
          <View style={styles.col}>
            <Text style={styles.sectionLabel}>Education</Text>
            <View style={styles.rule} />
            {education.map((edu, i) => (
              <View key={i} style={styles.eduCard}>
                <Text style={styles.eduSchool}>{edu.school}</Text>
                <Text style={styles.eduDegree}>
                  {edu.degree}, {edu.field}
                </Text>
                <Text style={styles.eduDates}>{edu.dates}</Text>
                {edu.note && (
                  <Text style={[styles.eduDates, { marginTop: 2 }]}>
                    {edu.note}
                  </Text>
                )}
              </View>
            ))}
          </View>

          <View style={styles.col}>
            <Text style={styles.sectionLabel}>
              Patents ({patents.length})
            </Text>
            <View style={styles.rule} />
            {patents.map((patent, i) => (
              <View key={i} style={styles.patentRow}>
                <Text style={styles.patentTitle}>{patent.title}</Text>
                <Text style={styles.patentDate}>{patent.date}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={[styles.sectionLabel, { marginTop: 14 }]}>
          Publications ({publications.length})
        </Text>
        <View style={styles.rule} />
        {publications.map((pub, i) => (
          <View key={i} style={styles.pubRow} wrap={false}>
            <Text style={styles.pubTitle}>{pub.title}</Text>
            <Text style={styles.pubMeta}>
              {pub.authors} {pub.journal}. {pub.year}.
            </Text>
            <Text style={styles.pubIds}>
              PMID: {pub.pmid} · DOI: {pub.doi}
            </Text>
          </View>
        ))}

        <Text style={[styles.sectionLabel, { marginTop: 14 }]}>
          Independent AI Projects
        </Text>
        <View style={styles.rule} />
        <Text style={[styles.jobDescription, { marginBottom: 12 }]}>
          Tools and prototypes exploring how AI can unlock health data,
          accelerate rare disease diagnosis, and reimagine clinical research.
        </Text>

        {projects.map((project, i) => (
          <View key={i} style={styles.projectRow} wrap={false}>
            <View style={styles.projectNameRow}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectTagline}>— {project.tagline}</Text>
            </View>
            <Text style={[styles.jobDescription, { marginTop: 1 }]}>
              {project.description}
            </Text>
            <Text style={styles.projectTech}>
              {project.tech.join("  ·  ")}
            </Text>
            <Link style={styles.projectUrl} src={project.url}>
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </Link>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {bio.name} — {bio.email}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
