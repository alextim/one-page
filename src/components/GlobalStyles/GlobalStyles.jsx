import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        /* SHARED */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* MIXINS */
        html,
        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeSpeed;
          margin: 0;
          padding: 0;
          overflow-wrap: break-word;
          word-wrap: break-word;

          /* яяяяяяя */
          width: 100%;
          height: 100%;
        }

        #root {
          min-height: 100vh;
        }

        html {
          font-size: 100%;
        }

        body {
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.4;
          letter-spacing: 0;
          font-weight: 400;
          font-style: normal;
          text-size-adjust: 100%;
          vertical-align: baseline;
          color: ${theme.colors.text};
          background-color: ${theme.colors.bg};
        }

        a,
        abbr,
        acronym,
        address,
        applet,
        article,
        aside,
        audio,
        b,
        big,
        blockquote,
        body,
        canvas,
        caption,
        center,
        cite,
        code,
        dd,
        del,
        details,
        dfn,
        div,
        dl,
        dt,
        em,
        embed,
        fieldset,
        figcaption,
        figure,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hgroup,
        html,
        i,
        iframe,
        img,
        ins,
        kbd,
        label,
        legend,
        li,
        mark,
        menu,
        nav,
        object,
        ol,
        output,
        p,
        pre,
        q,
        ruby,
        s,
        samp,
        section,
        small,
        span,
        strike,
        strong,
        sub,
        summary,
        sup,
        table,
        tbody,
        td,
        tfoot,
        th,
        thead,
        time,
        tr,
        tt,
        u,
        ul,
        var,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          vertical-align: baseline;
        }

        article,
        aside,
        footer,
        header,
        main,
        nav,
        section {
          display: block;
        }

        ol,
        ul {
          list-style-type: none;
          -webkit-padding-start: 0;
        }

        a,
        button {
          cursor: pointer;
        }

        a {
          color: inherit;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }

        /* SHARED */
        *:focus {
          outline: 1px solid #3740ff;
        }

        /* LINKS */
        a,
        :link,
        :visited {
          color: #3740ff;
          text-decoration: none;
        }

        a:active,
        :link:focus,
        :link:active,
        :visited:focus,
        :visited:active {
          outline: 1px solid #3740ff;
        }

        a:focus,
        a:active,
        a:hover,
        :link:focus,
        :link:active,
        :link:hover,
        :visited:focus,
        :visited:active,
        :visited:hover {
          text-decoration: underline;
        }

        /* BUTTONS */
        button {
          min-width: 36px;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          left: 0;
          margin-top: ${theme.navbar.h[0]};
          min-height: 100vh;
          background-color: ${theme.colors.bg};
          z-index: 2;
          ${theme.mq.md} {
            &.js-with-hero {
              margin-top: 0;
            }
          }
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          flex: 1;

          /* transition: transform .8s ease-in-out; */
          z-index: 100;
          color: ${theme.header.color};
          background-color: ${theme.header.bg};

          a {
            color: ${theme.header.color};
          }

          border-bottom: 1px solid ${theme.header.border};

          &.js-header-shadow {
            border-bottom: 0;
            box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15); /* box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13); */
          }

          ${theme.mq.md} {
            .js-with-hero & {
              a {
                color: #dfdfdf;
              }

              a:hover {
                color: white;
              }
            }

            .js-with-hero & {
              border-bottom: 0;
              background-color: transparent;

              &.js-header-shadow {
                background-color: ${theme.header.bg};

                a {
                  color: ${theme.header.color};
                }
              }
            }
          }
        }

        /*
        .js-header-hidden {
          transform: translateY(-110%);
        }
        */
        main {
          flex: 1 0 auto;
        }

        .mm {
          background-color: ${theme.header.bg};

          .js-with-hero & {
            ${theme.mq.md} {
              background-color: inherit;
            }
          }
        }

        footer {
          flex: 1;
          color: ${theme.footer.color};
          background: ${theme.footer.bg};
          min-height: ${theme.footer.minHeight};
          overflow: hidden;
          width: 100%;
        }

        ${theme.mq.md} {
          .main-content {
            margin-top: ${theme.navbar.h[1]};
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.headings};
        }

        h1,
        h1:not(:first-of-type),
        h2,
        h2:not(:first-of-type),
        h3,
        h3:not(:first-of-type),
        h4,
        h4:not(:first-of-type),
        h5,
        h5:not(:first-of-type) {
          margin: 0 0 1rem;
        }

        h1:not(:first-of-type),
        h2:not(:first-of-type),
        h3:not(:first-of-type) {
          margin-top: 3rem;
        }

        ${theme.mq.md} {
          h1:not(:first-of-type),
          h2:not(:first-of-type),
          h3:not(:first-of-type),
          h4:not(:first-of-type),
          h5:not(:first-of-type) {
            margin: 0 0 1.5rem;
          }

          h1:not(:first-of-type),
          h2:not(:first-of-type),
          h3:not(:first-of-type) {
            margin-top: 4.5rem;
          }
        }

        h1 {
          margin: 0.5rem 0;
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.03rem;
        }

        dl,
        ol,
        p,
        table,
        ul {
          margin: 0 0 1.5rem;
          font-size: 1.15rem;
        }

        img {
          width: 100%;
          height: auto;
        }
      `}
    />
  );
};

export default GlobalStyles;
