import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconChevronDown } from '../components/UI/BitIcons.jsx'
import AnimatedSection from '../components/UI/AnimatedSection.jsx'
import Badge from '../components/UI/Badge.jsx'
import Button from '../components/UI/Button.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'

const objectives = [
  {
    title: 'Data Representation & Bit Manipulation',
    items: [
      { text: "Convert values between binary, hexadecimal, and decimal representations", topics: ['number-rep-1'] },
      { text: "Recall that bits are binary digits (0 or 1) and a byte consists of 8 bits", topics: ['number-rep-1'] },
      { text: "Use bitwise operators (&, |, ^, ~, <<, >>) to mask, shift, extract, and combine bits", topics: ['bitwise'] },
      { text: "Differentiate between left shift, logical right shift, arithmetic right shift", topics: ['bitwise'] },
      { text: "Addition and subtraction with unsigned and signed two's complement", topics: ['binary-arithmetic'] },
      { text: "Detecting overflow with unsigned and signed two's complement", topics: ['binary-arithmetic'] },
      { text: "Understand unsigned, sign-magnitude, one's complement, and two's complement representations", topics: ['number-rep-2'] },
    ]
  },
  {
    title: 'Makefile Execution',
    items: [
      { text: "Identify the default target in a Makefile (first target listed)", topics: ['make'] },
      { text: "Predict the behavior of make, make <target>, and make <target1> <target2>", topics: ['make'] },
      { text: "Determine which targets are rebuilt after a source file change", topics: ['make'] },
      { text: "Explain why unchanged targets remain up to date", topics: ['make'] },
      { text: "Predict the outcome of running make clean followed by make", topics: ['make'] },
      { text: "Explain what happens when a required dependency does not exist", topics: ['make'] },
    ]
  },
  {
    title: 'Bash Script Interpretation',
    items: [
      { text: "Define what a shell script is and describe its role in Unix systems", topics: ['bash'] },
      { text: "Explain the purpose of the shebang (#!) line and identify the interpreter", topics: ['bash'] },
      { text: "Inspect and modify file permissions to enable script execution", topics: ['bash'] },
      { text: "Trace the execution of commands in a shell script", topics: ['bash'] },
      { text: "Reason about conditional execution using if statements (-eq, -gt, -lt)", topics: ['bash'] },
      { text: "Analyze loop constructs (for loops) and predict iterations", topics: ['bash'] },
    ]
  }
]

const referenceData = {
  twosComplement: {
    title: "Two's Complement Cheat Sheet",
    headers: ['Bits', 'Unsigned Range', 'Signed Range', 'Min Signed', 'Max Signed'],
    rows: [
      ['4', '0 to 15', '-8 to 7', '-2^3 = -8', '2^3 - 1 = 7'],
      ['8', '0 to 255', '-128 to 127', '-2^7 = -128', '2^7 - 1 = 127'],
      ['16', '0 to 65,535', '-32,768 to 32,767', '-2^15', '2^15 - 1'],
      ['32', '0 to 4,294,967,295', '-2,147,483,648 to 2,147,483,647', '-2^31', '2^31 - 1'],
    ]
  },
  bitwiseOps: {
    title: "Bitwise Operator Truth Table",
    headers: ['A', 'B', 'A & B', 'A | B', 'A ^ B', '~A'],
    rows: [
      ['0', '0', '0', '0', '0', '1'],
      ['0', '1', '0', '1', '1', '1'],
      ['1', '0', '0', '1', '1', '0'],
      ['1', '1', '1', '1', '0', '0'],
    ]
  },
  conversions: {
    title: "Common Binary / Hex Conversions",
    headers: ['Decimal', 'Binary (4-bit)', 'Hex'],
    rows: [
      ['0', '0000', '0'], ['1', '0001', '1'], ['2', '0010', '2'], ['3', '0011', '3'],
      ['4', '0100', '4'], ['5', '0101', '5'], ['6', '0110', '6'], ['7', '0111', '7'],
      ['8', '1000', '8'], ['9', '1001', '9'], ['10', '1010', 'A'], ['11', '1011', 'B'],
      ['12', '1100', 'C'], ['13', '1101', 'D'], ['14', '1110', 'E'], ['15', '1111', 'F'],
    ]
  },
  bashOps: {
    title: "Bash Comparison Operators",
    headers: ['Operator', 'Meaning', 'Example'],
    rows: [
      ['-eq', 'Equal to', '[ $a -eq $b ]'],
      ['-ne', 'Not equal to', '[ $a -ne $b ]'],
      ['-gt', 'Greater than', '[ $a -gt $b ]'],
      ['-lt', 'Less than', '[ $a -lt $b ]'],
      ['-ge', 'Greater than or equal', '[ $a -ge $b ]'],
      ['-le', 'Less than or equal', '[ $a -le $b ]'],
    ]
  },
  shiftOps: {
    title: "Shift Operations",
    headers: ['Operation', 'Symbol', 'Effect', 'Fill Bit'],
    rows: [
      ['Left Shift', '<<', 'Multiply by 2^n', '0'],
      ['Logical Right Shift', '>>> (Java) / >> (unsigned)', 'Divide by 2^n (unsigned)', '0'],
      ['Arithmetic Right Shift', '>> (signed)', 'Divide by 2^n (preserves sign)', 'Sign bit (MSB)'],
    ]
  }
}

export default function ReviewPage() {
  const navigate = useNavigate()
  const [confidence, setConfidence] = useLocalStorage('comp211-confidence', {})
  const [expandedObj, setExpandedObj] = useState(0)
  const [expandedRef, setExpandedRef] = useState(null)

  const toggleConfidence = (objIdx, itemIdx) => {
    const key = `${objIdx}-${itemIdx}`
    setConfidence(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const confidentCount = Object.values(confidence).filter(Boolean).length
  const totalItems = objectives.reduce((sum, obj) => sum + obj.items.length, 0)

  return (
    <div className="page-review">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">HOME</Link>
          <span className="separator">/</span>
          <span className="current">Review</span>
        </nav>

        <AnimatedSection>
          <div className="page-header">
            <h1 className="page-title">REVIEW</h1>
            <p className="page-subtitle">Learning objectives & reference material for Quiz 1</p>
            <div className="topic-meta-row">
              <Badge variant={confidentCount === totalItems ? 'success' : undefined}>
                {confidentCount}/{totalItems} objectives confident
              </Badge>
            </div>
          </div>
        </AnimatedSection>

        {/* Learning Objectives */}
        <section className="section">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">OBJECTIVES</h2>
              <p className="section-subtitle">Self-assess your confidence on each learning objective</p>
            </div>
          </AnimatedSection>

          <div className="objectives-list">
            {objectives.map((obj, objIdx) => (
              <AnimatedSection key={objIdx} delay={objIdx * 0.1}>
                <div className="objective-accordion">
                  <button
                    className={`objective-header ${expandedObj === objIdx ? 'expanded' : ''}`}
                    onClick={() => setExpandedObj(expandedObj === objIdx ? null : objIdx)}
                  >
                    <span className="objective-number">{objIdx + 1}</span>
                    <span className="objective-title">{obj.title}</span>
                    <span className="objective-meta">
                      {obj.items.filter((_, i) => confidence[`${objIdx}-${i}`]).length}/{obj.items.length}
                    </span>
                    <span className="objective-chevron">{expandedObj === objIdx ? '−' : '+'}</span>
                  </button>
                  {expandedObj === objIdx && (
                    <ul className="objective-items review-items">
                      {obj.items.map((item, itemIdx) => {
                        const key = `${objIdx}-${itemIdx}`
                        const isConfident = confidence[key]
                        return (
                          <li key={itemIdx} className="review-item">
                            <div className="review-item-content">
                              <span className={`review-item-text ${isConfident ? 'confident' : ''}`}>
                                {item.text}
                              </span>
                              <div className="review-item-actions">
                                <button
                                  className={`confidence-toggle ${isConfident ? 'confident' : 'needs-review'}`}
                                  onClick={() => toggleConfidence(objIdx, itemIdx)}
                                >
                                  {isConfident ? 'Confident' : 'Needs Review'}
                                </button>
                                {item.topics.map(topicId => (
                                  <Link key={topicId} to={`/topic/${topicId}`} className="review-topic-link">
                                    Practice
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Reference Tables */}
        <section className="section">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-label">REFERENCE</h2>
              <p className="section-subtitle">Quick reference tables for Quiz 1 topics</p>
            </div>
          </AnimatedSection>

          <div className="reference-tables">
            {Object.entries(referenceData).map(([key, table], i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="reference-card">
                  <button
                    className={`reference-header ${expandedRef === key ? 'expanded' : ''}`}
                    onClick={() => setExpandedRef(expandedRef === key ? null : key)}
                  >
                    <h3 className="reference-title">{table.title}</h3>
                    <IconChevronDown size={18} className={`reference-chevron ${expandedRef === key ? 'rotated' : ''}`} />
                  </button>
                  {expandedRef === key && (
                    <div className="reference-body">
                      <div className="reference-table-wrapper">
                        <table className="reference-table">
                          <thead>
                            <tr>
                              {table.headers.map(h => <th key={h}>{h}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => <td key={ci}><code>{cell}</code></td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection>
          <div className="cta-grid">
            <div className="cta-block">
              <h3 className="cta-label">PRACTICE</h3>
              <p className="cta-subtitle">Focus on weak areas</p>
              <p className="cta-description">
                Jump into free practice with problems from the objectives you marked as "Needs Review."
              </p>
              <Button onClick={() => navigate('/practice')} arrow>
                Start Practice
              </Button>
            </div>
            <div className="cta-block">
              <h3 className="cta-label">QUIZ</h3>
              <p className="cta-subtitle">Test yourself</p>
              <p className="cta-description">
                Take a timed quiz covering all topics to simulate the real quiz experience.
              </p>
              <Button onClick={() => navigate('/quiz')} arrow>
                Take a Quiz
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
