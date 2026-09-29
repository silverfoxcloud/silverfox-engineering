# Silver Fox Engineering

The bilingual public engineering portal of Silver Fox. It explains the architecture, platform boundaries, engineering principles and technology decisions behind the ecosystem without exposing sensitive implementation detail.

## Purpose

The portal is an engineering publication rather than a product landing page. Its job is to make public technical decisions understandable: how shared capabilities are separated from product ownership, how platform boundaries are designed, how technologies are evaluated, and which product capabilities are implemented versus still part of a roadmap.

## Content scope

Public topics include:

- system and cloud-platform architecture;
- security, data, AI, DevOps/SRE and reliability;
- Technology Radar and engineering principles;
- SFAS, Silver Fox License Platform and Fox Pay;
- ExoTravel and ExoHub as product/domain architecture;
- multilingual RTL/LTR engineering and accessibility.

English and Persian are independently edited. Persian is not generated as a sentence-by-sentence translation of English.

## Source governance

Public technical claims are grounded in the current product repositories and the canonical `silverfox-project-documents` references. Completed phase reports and live project status override older roadmap assumptions.

Roadmap concepts are labeled as direction rather than shipped features. Private topology, credentials, secrets, internal control details, exploitable security procedures and sensitive schemas are not published.

## Contribution philosophy

Keep claims specific, source-grounded and useful to an engineer. Explain why a decision exists and where its boundary sits. Avoid generic SaaS language, speculative capabilities and unnecessary internal implementation detail.

Every content or UI change should preserve:

- English LTR and Persian RTL as equal product modes;
- accessibility and keyboard operation;
- reduced-motion behavior;
- responsive layouts;
- static export compatibility;
- page metadata, canonical URLs and sitemap consistency.

## Public routing and locale

Canonical URLs are locale-neutral. Persian and English render on the same route, and the selected language is restored from browser preference storage. Legacy `/fa/...` paths remain only as `noindex` redirects to clean canonical routes.

Because both languages intentionally share one canonical URL, the site does not emit misleading `hreflang` pairs that point multiple language codes at the same resource. Conventional hreflang requires distinct crawlable language URLs; adding those would require a deliberate change to the locale-routing architecture.

Implementation details and current validation status are documented in:

- `docs/portal-architecture.md`
- `docs/iteration-status.md`
