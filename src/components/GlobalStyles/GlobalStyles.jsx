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
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        pre,
        form,
        blockquote,
        th,
        td {
          margin: 0;
          padding: 0;
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
        }

        /* яяяяяяя */
        html,
        body {
          width: 100%;
          height: 100%;
        }
        body {
          min-height: 100%;
        }
        #root {
          min-height: 100vh;
        }

        html {
          font-size: 100%;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.4;
          letter-spacing: 0;
          font-weight: 400;
          font-style: normal;
          text-size-adjust: 100%;
          vertical-align: baseline;
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

        body {
          color: ${theme.colors.text};
          background-color: ${theme.colors.bg};
        }
        .main-content {
          background-color: #fcfcfc;
          left: 0;
          z-index: 2;

          margin-top: 3rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1 0 auto;
        }

        footer {
          color: #181716;
          background: #e6e6e6;
          min-height: 235px;
          overflow: hidden;
          width: 100%;
        }

        ${theme.mq.md} {
          .main-content {
            margin-top: 3.5rem;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
