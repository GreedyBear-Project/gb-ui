import React from "react";
import { Row, Col, Container } from "reactstrap";

import { Toaster, ScrollToTopButton, useToastr } from "@greedybear/gb-ui";

// constants
const GB_UI_VERSION = "v0.1.0";
const selector = (state) => state.toasts;

function AppFooter() {
  console.debug("AppFooter rendered!");

  // consume store
  const toasts = useToastr(selector);

  return (
    <div className="d-flex flex-column">
      {/* Toasts */}
      <section className="fixed-bottom" id="app-toasts">
        {toasts.map((tProps) => (
          <Toaster key={tProps.id} {...tProps} />
        ))}
      </section>
      {/* Footer */}
      <Container fluid className="border-top mt-2 py-1">
        <Row className="d-flex flex-column text-center lead g-0">
          <Col className="text-muted small standout">
            <strong>gb-ui </strong> &copy; By{" "}
            <a
              className="text-muted link"
              href="https://github.com/GreedyBear-Project"
              target="_blank"
              rel="noreferrer noopener"
            >
              GreedyBear Project
            </a>
          </Col>
          <Col className="text-muted small standout">
            <a
              className="text-muted link"
              href="https://github.com/GreedyBear-Project/gb-ui"
              target="_blank"
              rel="noreferrer noopener"
            >
              ({GB_UI_VERSION})
            </a>
          </Col>
        </Row>
      </Container>
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}

export default AppFooter;
