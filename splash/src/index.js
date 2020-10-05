import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Prism from 'prismjs';
import '@atomikui/core/dist/styles/main.min.css';
import { Header, Footer, Link, Card } from '@atomikui/core';
import Hero from './components/Hero';
import AtomikUILogo from './components/AtomikUILogo';
import './styles/main.scss';
import 'prismjs/themes/prism-okaidia.css';

const { version } = require('../../package.json');

const versionNumber = `Version: ${version}`;

const npmPath = 'https://www.npmjs.com/package/@atomikui/core';

const logo = <AtomikUILogo size={40} />;

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Header
        backgroundColor="#263238"
        logo={logo}
        logoLink="/"
        logoText="Atomik UI"
        logoFontSize={30}
        logoFont="'Barlow Condensed', Arial, Helvetica, sans-serif"
        logoFontColor="#fff9c4"
        linkColor="#fff"
        menuToggleColor="#fff"
      >
        <Link href={npmPath} target="_blank" rel="noreferrer noopener">
          {versionNumber}
        </Link>
      </Header>
      <Hero
        title="Atomik UI"
        subtitle="A Library of Accessible React Components for Rapid Application Development"
      />
      <main>
        <Grid>
          <Row>
            <Col md={6}>
              <Card
                title={<h3>Installation</h3>}
                footer={
                  <Link
                    className="link"
                    hrek="#/Getting%20Started/Installation"
                  >
                    Read Installation Docs
                  </Link>
                }
              >
                <div style={{ height: '380px' }}>
                  <p>1. Install the Atomik UI package from npm.</p>
                  <div className="margin-top-16 margin-bottom-8">
                    <pre>
                      <code className="language-javascript">
                        npm install @atomikui/core
                      </code>
                    </pre>
                  </div>
                  <p>2. Import the supporting CSS into your project.</p>
                  <div className="margin-top-16 margin-bottom-8">
                    <pre>
                      <code className="language-javascript">
                        import '@atomikui/core/dist/styles/main.min.css';
                      </code>
                    </pre>
                  </div>
                  <p>
                    3. Optional: Import and import the Atomik UI Core Sass
                    Library.
                  </p>
                  <div className="margin-top-16 margin-bottom-8">
                    <pre>
                      <code className="language-javascript">
                        npm install @atomikui/core-sass
                      </code>
                    </pre>
                  </div>
                  <div className="margin-top-16 margin-bottom-8">
                    <pre>
                      <code className="language-css">
                        @import
                        'node_modules/@atomikui/core-sass/abstracts/main';
                      </code>
                    </pre>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                title={<h3>Usage</h3>}
                footer={
                  <Link className="link" href="#/component-library">
                    Explore Component Docs
                  </Link>
                }
              >
                <div style={{ height: '380px' }}>
                  <p>Import components as needed.</p>
                  <div className="margin-top-16 margin-bottom-8">
                    <pre>
                      <code className="language-javascript">
                        {`import { Button } from '@atomikui/core';
    
<Pagination>
  <Link href="#">Previous</Link>
  <Link href="#">1</Link>
  <Link href="#" active>2</Link>
  <Link href="#">3</Link>
  <Link href="#">4</Link>
  <Link href="#">Next</Link>
</Pagination>`}
                      </code>
                    </pre>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Grid>
      </main>
      <Footer
        copyrightEntity="Atomik UI"
        backgroundColor="#263238"
        navBackgroundColor="#1b282e"
        linkColor="#fff9c4"
        textColor="#fff"
        logo={logo}
      >
        <Link href={npmPath}>{versionNumber}</Link>
      </Footer>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
