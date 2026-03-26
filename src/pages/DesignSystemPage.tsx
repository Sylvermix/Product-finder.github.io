/**
 * Design System Preview Page
 * Live preview of all DS-AI tokens and components.
 * Figma source: https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI
 */
import { colors, semantic, spacing, borderWidth } from '@ds/tokens'
import { Button } from '@components/Button'
import styles from './DesignSystemPage.module.css'

/* ── Helpers ── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionDivider} />
      {children}
    </section>
  )
}

function TokenGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.tokenGroup}>
      <p className={styles.tokenGroupLabel}>{label}</p>
      <div className={styles.tokenRow}>{children}</div>
    </div>
  )
}

function ColorSwatch({
  color,
  name,
  sub,
}: {
  color: string
  name: string
  sub?: string
}) {
  return (
    <div className={styles.swatch}>
      <div className={styles.swatchColor} style={{ backgroundColor: color }} />
      <span className={styles.swatchName}>{name}</span>
      {sub && <span className={styles.swatchSub}>{sub}</span>}
    </div>
  )
}

/* ── Palette scale row ── */

function PaletteRow({
  name,
  scale,
}: {
  name: string
  scale: Record<string | number, string>
}) {
  return (
    <div className={styles.paletteRow}>
      <span className={styles.paletteName}>{name}</span>
      <div className={styles.paletteSwatches}>
        {Object.entries(scale).map(([step, hex]) => (
          <div key={step} className={styles.paletteCell}>
            <div className={styles.paletteColor} style={{ backgroundColor: hex }} />
            <span className={styles.paletteStep}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Typography row ── */

const typographyScale = [
  { name: 'Display', size: '48px', weight: 700, lineHeight: '1.1', sample: 'The quick brown fox' },
  { name: 'H1', size: '36px', weight: 700, lineHeight: '1.15', sample: 'The quick brown fox' },
  { name: 'H2', size: '30px', weight: 700, lineHeight: '1.2', sample: 'The quick brown fox' },
  { name: 'H3', size: '24px', weight: 700, lineHeight: '1.25', sample: 'The quick brown fox' },
  { name: 'H4', size: '20px', weight: 600, lineHeight: '1.3', sample: 'The quick brown fox' },
  { name: 'H5', size: '18px', weight: 600, lineHeight: '1.35', sample: 'The quick brown fox' },
  { name: 'H6', size: '16px', weight: 600, lineHeight: '1.4', sample: 'The quick brown fox' },
  { name: 'Body LG', size: '18px', weight: 400, lineHeight: '1.6', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body', size: '16px', weight: 400, lineHeight: '1.6', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body SM', size: '14px', weight: 400, lineHeight: '1.5', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Label', size: '14px', weight: 500, lineHeight: '1.4', sample: 'Label text' },
  { name: 'Label SM', size: '12px', weight: 500, lineHeight: '18px', sample: 'Label small' },
  { name: 'Caption', size: '12px', weight: 400, lineHeight: '1.4', sample: 'Caption text example' },
  { name: 'Overline', size: '11px', weight: 600, lineHeight: '1.4', sample: 'OVERLINE TEXT' },
] as const

/* ── Main page ── */

export function DesignSystemPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>DS-AI Design System</h1>
        <p className={styles.pageSubtitle}>
          Live preview of all tokens and components from the{' '}
          <a
            href="https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma DS-AI file
          </a>
        </p>
      </header>

      {/* ── Foundation ── */}
      <Section title="Colors — Palette">
        <div className={styles.palette}>
          <PaletteRow name="Grey" scale={colors.grey} />
          <PaletteRow name="Green" scale={colors.green} />
          <PaletteRow name="Blue" scale={colors.blue} />
          <PaletteRow name="Red" scale={colors.red} />
          <PaletteRow name="Orange" scale={colors.orange} />
        </div>
      </Section>

      <Section title="Colors — Semantic Tokens">
        <TokenGroup label="Foreground">
          <ColorSwatch color={semantic.fg.primary} name="fg/primary" sub="#082415" />
          <ColorSwatch color={semantic.fg.secondary} name="fg/secondary" sub="#3d3e42" />
          <ColorSwatch color={semantic.fg.tertiary} name="fg/tertiary" sub="#696b72" />
          <ColorSwatch color={semantic.fg.disabled} name="fg/disabled" sub="#9697a2" />
        </TokenGroup>

        <TokenGroup label="Neutrals">
          <ColorSwatch color={semantic.neutrals.background} name="neutrals/background" sub="Grey 50" />
          <ColorSwatch color={semantic.neutrals.surface} name="neutrals/surface" sub="white" />
          <ColorSwatch color={semantic.neutrals.subtle} name="neutrals/subtle" sub="Grey 50" />
          <ColorSwatch color={semantic.neutrals.muted} name="neutrals/muted" sub="Grey 75" />
          <ColorSwatch color={semantic.neutrals.emphasis} name="neutrals/emphasis" sub="Grey 100" />
        </TokenGroup>

        <TokenGroup label="Border">
          <ColorSwatch color={semantic.border.default} name="border/default" sub="Grey 100" />
          <ColorSwatch color={semantic.border.strong} name="border/strong" sub="Grey 200" />
        </TokenGroup>

        <TokenGroup label="Accents">
          <ColorSwatch color={semantic.accents.brand} name="accents/brand" />
          <ColorSwatch color={semantic.accents.green} name="accents/green" sub="Green 500" />
          <ColorSwatch color={semantic.accents.red} name="accents/red" sub="Red 500" />
          <ColorSwatch color={semantic.accents.orange} name="accents/orange" sub="Orange 500" />
        </TokenGroup>

        <TokenGroup label="Tints">
          <ColorSwatch color={semantic.tints.brand} name="tint/brand" />
          <ColorSwatch color={semantic.tints.green} name="tint/green" sub="Green 50" />
          <ColorSwatch color={semantic.tints.red} name="tint/red" sub="Red 50" />
          <ColorSwatch color={semantic.tints.orange} name="tint/orange" sub="Orange 50" />
          <ColorSwatch color={semantic.tints.blue} name="tint/blue" sub="Blue 50" />
        </TokenGroup>

        <TokenGroup label="Constant">
          <ColorSwatch color={semantic.constant.white} name="constant/white" />
          <ColorSwatch color={semantic.constant.black} name="constant/black" />
        </TokenGroup>
      </Section>

      <Section title="Typography">
        <div className={styles.typeScale}>
          {typographyScale.map((item) => (
            <div key={item.name} className={styles.typeRow}>
              <div className={styles.typeSpec}>
                <span className={styles.typeName}>{item.name}</span>
                <span className={styles.typeMeta}>
                  {item.size} / {item.weight === 700 ? 'Bold' : item.weight === 600 ? 'Semi Bold' : item.weight === 500 ? 'Medium' : 'Regular'} / {item.lineHeight}
                </span>
              </div>
              <span
                className={styles.typeSample}
                style={{ fontSize: item.size, fontWeight: item.weight, lineHeight: item.lineHeight }}
              >
                {item.sample}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing">
        <div className={styles.spacingGrid}>
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} className={styles.spacingRow}>
              <span className={styles.spacingKey}>{key}</span>
              <span className={styles.spacingValue}>{value}</span>
              <div className={styles.spacingBar} style={{ width: value === '0px' ? '2px' : value }} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Width">
        <div className={styles.borderWidthGrid}>
          {Object.entries(borderWidth).map(([name, value]) => (
            <div key={name} className={styles.borderWidthRow}>
              <span className={styles.borderWidthName}>{name}</span>
              <span className={styles.borderWidthValue}>{value}</span>
              <div className={styles.borderWidthLine} style={{ borderBottomWidth: value, borderBottomStyle: 'solid', borderBottomColor: 'var(--color-fg-primary)' }} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div className={styles.shadowGrid}>
          {(['sm', 'default', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className={styles.shadowCard} style={{ boxShadow: `var(--shadow-${size})` }}>
              <span className={styles.shadowLabel}>{size.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Components ── */}
      <Section title="Button">
        <div className={styles.componentGroup}>
          <p className={styles.componentVariantLabel}>Primary</p>
          <div className={styles.componentRow}>
            <Button variant="primary">Primary</Button>
            <Button variant="primary" className={styles.hoverPreview}>Hover</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>
        <div className={styles.componentGroup}>
          <p className={styles.componentVariantLabel}>Secondary</p>
          <div className={styles.componentRow}>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
