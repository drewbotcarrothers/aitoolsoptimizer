---
title: "Best AI for Excel and Google Sheets (2026): Formulas, Analysis, and VBA"
description: "Which AI to use inside Excel and Google Sheets in 2026: Copilot, Gemini, ChatGPT, Claude, and Julius, with USD prices and what each one is documented to do."
pubDate: "2026-10-24"
category: "data-analytics"
tags: ["excel", "google-sheets", "copilot", "formulas", "vba"]
relatedTools: ["microsoft-copilot", "gemini", "chatgpt", "claude", "julius-ai", "hex"]
sample: false
draft: false
---

**Use the AI that already sits in the file when you have the plan that unlocks it.** In Excel, that is [Microsoft Copilot](/tools/microsoft-copilot/) on a qualifying Microsoft 365 plan. In Google Sheets, that is [Gemini](/tools/gemini/) on an eligible Google AI or Workspace plan. If you only have the file, upload it to [Julius AI](/tools/julius-ai/), [ChatGPT](/tools/chatgpt/), or [Claude](/tools/claude/) and paste back the formulas you have checked.

This guide separates three jobs that get lumped together: writing a formula, explaining a table, and drafting VBA. Prices are US list prices. Copilot credit limits and Gemini's Sheets behavior were read from Microsoft and Google help pages on October 24, 2026. Subscription dollar prices for Microsoft 365 and Julius were taken from vendor pages on October 16, 2026. Fit labels are published-product fit, not a bake-off score.

## Which tool for which job

| Job | Use this | Why |
|---|---|---|
| Formula, chart, or PivotTable inside an .xlsx you already live in | Copilot in Excel | Microsoft documents edit, plan, and chat modes in the workbook |
| Formula or table inside a Google Sheet | Gemini in Sheets | Ask Gemini builds formulas and can insert them. `=AI()` and `=Gemini()` run in a cell |
| "What is interesting in this export?" and you do not need the answer inside the grid | [Julius AI](/tools/julius-ai/) | Upload a spreadsheet and ask in plain language |
| A formula or a VBA draft you will paste and review | [ChatGPT](/tools/chatgpt/) Plus or [Claude](/tools/claude/) | Plus adds Office and Sheets extensions. Claude runs code on uploaded files |
| A governed warehouse, not a one-off file | [Hex](/tools/hex/) | A notebook and app platform, not a cell helper |

> **Figure (spreadsheet-path diagram, not a product screenshot).** **Alt:** Two files. An Excel file goes to Copilot if the Microsoft 365 plan includes in-app Copilot, otherwise to Julius, ChatGPT, or Claude as an upload. A Google Sheet goes to Gemini if the account has an eligible plan. VBA is a side path: the assistant drafts code, a person pastes it into the VBA editor and tests it on a copy.

The wider price map is [which AI subscription is worth paying for](/blog/which-ai-subscription-is-worth-paying-for/). The assistant choice behind the upload path is [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/).

## Copilot in Excel

Microsoft's Excel help describes Copilot as a way to ask questions in plain language, get summaries, trends, and outliers, generate formula columns and single-cell formulas, explain a formula that is already in a cell, and build charts and PivotTables. The FAQ lists three modes: **edit** (Copilot changes the workbook), **plan** (it proposes steps first), and **chat** (answers stay in the pane). Edit, plan, and chat are documented on Windows, Mac, and the web.

Microsoft's Excel marketing page says editing with Copilot requires one of these: Microsoft 365 Personal or Family with an AI credits plan, Microsoft 365 Premium, or a commercial Microsoft 365 Copilot subscription.

The consumer credit table on Microsoft's support site, read October 24, 2026:

| Plan | In-app Copilot, including Analyze data in Excel | Notes |
|---|---|---|
| Microsoft 365 Basic | Advanced AI features are not included | Chat in the Copilot app is a different product |
| Personal | 60 AI credits/month | US price on the individuals page was $9.99/month as of October 16, 2026 |
| Family | 60 AI credits/month | $12.99/month for up to 6 people. AI benefits are for the subscription owner only |
| Premium | Extensive usage beyond the standard credit limits | $19.99/month as of October 16, 2026. Analyst and Researcher are listed on Premium, not on Personal or Family |

Annual consumer billing was listed as saving up to 17% on October 16. Business Copilot is a separate per-user product. The promotional yearly price we recorded then started at $18/user/month, down from $21. Confirm that promo before you quote it to a team.

Copilot is the right buy when Excel is the system of record and you want the formula written into the sheet. It is a weak buy if you open Excel twice a month. Sixty credits is a real cap on Personal and Family. Spend them on workbooks you will reuse.

## Gemini in Google Sheets

Google's help page for Gemini in Sheets says you can create tables, create formulas, generate analysis, build charts, summarize Drive and Gmail files, and run sheet actions such as conditional formatting, pivot tables, filters, and dropdowns. The feature **requires an eligible Google Workspace or Google AI plan**. An Excel file needs to be saved as a Google Sheet first (File, Save as Google Sheets) before those features apply.

Two entry points are documented:

- **Ask Gemini** in the side panel. For a formula, you can also start in a cell, type `=`, then use Ctrl+Alt+G on Windows and ChromeOS or Command+Ctrl+G on Mac. Insert places the formula. Fix is offered when a cell shows an error.
- **`=AI()` or `=Gemini()`**, documented as a cell function for generated text, summaries, categories, and, where available, answers that use Google Search. You then choose Generate and Insert.

"Help me organize" is a different, narrower feature. Google says it creates a new table from a prompt and **cannot edit or refer to existing content** in the spreadsheet. Use it on a blank tab. Inserting it over data overwrites what it replaces.

Google AI Plus is $4.99/month and Google AI Pro is $19.99/month on the subscriptions page we checked October 16, 2026. Pro is the plan that also bundles a large storage allotment, which matters if the Sheet is not your only Google bill. The subscription comparison is in [which AI subscription is worth paying for](/blog/which-ai-subscription-is-worth-paying-for/).

## ChatGPT and Claude, when the grid is not where you work

OpenAI's plans page, read October 24, 2026, lists **Excel, Word, PowerPoint, and Google Sheets extensions** as limited on Free and Go, included on Plus, and expanded on Pro. Plus is the $20/month plan in OpenAI's US pricing documentation. Go is $8/month and may include ads. Pro is $100, $200, or $500/month. The same page lists interactive tables and charts on Plus and Pro, and data analysis as limited on Free and included from Go up.

That makes Plus the first ChatGPT plan to treat as an Office companion. Go is a reasonable plan for more file uploads and Python-style analysis. It is the wrong plan if the reason you are paying is the spreadsheet extension.

[Claude](/tools/claude/) Pro is $20/month, or $17/month when billed annually ($200 up front). The pricing page lists file creation and code execution on Free as well as Pro, and Research on Pro. Claude is the better upload when the workbook is one tab inside a long memo. The usage math for staying on Pro is [Claude Pro vs Max](/blog/claude-pro-vs-max-2026/). The ChatGPT tier choice is [Go vs Plus vs Pro](/blog/chatgpt-go-vs-plus-vs-pro-2026/).

Neither assistant is a substitute for cell references you understand. Ask it to return the formula and a one-sentence explanation of each range. Then type or insert that formula yourself so you can see it calculate.

The person who drafts a pipeline diff and a schema contract, rather than a formula in a cell, is [best AI tools for data engineers](/blog/best-ai-tools-for-data-engineers-2026/).

## Julius, when you want an answer more than a workbook

[Julius AI](/tools/julius-ai/) is a chat workspace for files. Free includes a daily credit allowance. Plus is $20/month or $16/month billed annually, with 2,000 monthly credits, 100 daily refresh credits on paid plans, and 16 GB of RAM. Pro is $45/month or $37 annually, with 5,000 credits. Business is $450/month or $375 annually and adds database connectors.

Use Julius when the deliverable is a chart and a paragraph, and you will paste the conclusion into a deck. Use Copilot or Gemini when the deliverable is a formula that must keep working next month. Julius's own pricing page also sells presentations and websites. That is extra surface area, not a reason to pick it for a VLOOKUP.

## VBA, without pretending the spreadsheet has a macro agent

Microsoft's Copilot in Excel articles we used document formulas, insights, charts, PivotTables, formatting, and workbook edits. They do not document "write and install this VBA project" as the feature. Treat VBA as code:

1. Save a copy of the workbook. Disable macros on the original until you know what the code does.
2. Ask ChatGPT or Claude for a procedure with comments, the assumptions, and what it will change.
3. Paste into the VBA editor. Step through with the debugger. Confirm it touches the ranges you named.
4. Refuse any macro that downloads a file, hides sheets you did not ask about, or sends data out of the workbook.

Claude's code execution can analyze a CSV or spreadsheet in the chat. That is a different result from a macro that staff will run every Friday. If the same steps must run unattended, write them as Power Query, an Office Script, or an Apps Script function a teammate can read. A macro nobody can explain is a support ticket.

Google's equivalent for repeatable logic is Apps Script, not VBA. Gemini can draft a script the same way Claude can draft VBA. Review it in the script editor before you authorize scopes.

## Fit from public documentation

|  | Copilot in Excel | Gemini in Sheets | ChatGPT Plus | Claude Pro | Julius Plus |
|---|---|---|---|---|---|
| Writes into the file you already have | Strong | Strong | Partial (extensions on Plus) | Partial (files you upload) | Partial |
| Documented formula help | Strong | Strong | Strong as a draft | Strong as a draft | Partial |
| Explains an existing formula in place | Strong | Partial | Partial | Partial | Limited |
| Analysis without a paid office plan | Limited | No, plan required | Strong on Plus, limited on Free | Strong enough to try on Free | Strong on Free to test |
| VBA or Apps Script as reviewed code | Not the documented feature | Apps Script is a separate draft | Strong as a draft | Strong as a draft | Limited |
| Lowest confirmed individual price | $9.99/month Personal | Google AI Plus $4.99/month | $20/month | $17/month annual | $16/month annual |

## How to keep the numbers honest

- Name the columns in the prompt. "Margin by region, using Revenue and Cost" beats "analyze this."
- Ask for the formula even when the tool offers to insert it. You want the expression in the cell, not only a paragraph.
- Check totals against a known figure before you share the chart.
- Do not paste a sheet of customer data into a consumer chat tool if your workplace forbids it. Copilot on a business tenant and Gemini on a Workspace account are the paths with admin controls. Consumer plans are not those paths.

## FAQ

### What is the best free AI for Excel?

Free Copilot chat can discuss a problem, and ChatGPT Free can draft a formula, with limited file uploads. In-app editing in Excel is tied to a Microsoft 365 plan with AI credits. If "free" means no new subscription, use the plan you already pay for. If you pay for nothing, draft the formula in ChatGPT Free or Claude Free and type it in yourself.

### Can Copilot write VBA?

The Excel help pages used for this article describe formulas, insights, charts, PivotTables, and edits. Draft VBA in ChatGPT or Claude, then test it on a copy. Do not enable macros from code you have not read.

### Gemini or Copilot for a team that uses both?

Keep each file in the suite it already lives in. Converting every workbook so one assistant can see it creates a second source of truth. Pay for the suite your files are in. Add Julius or a chatbot only for the exports nobody needs to keep as a living sheet.

## Last verified

October 24, 2026 for Microsoft's Copilot in Excel help, the Microsoft 365 AI credit table, Google's Gemini in Sheets help, and OpenAI's plans page feature matrix. October 16, 2026 for Microsoft 365 US dollar prices, Google AI Plus and Pro prices, Julius prices, and Claude's published Pro price.

**Sources:** [Copilot in Excel data insights](https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel), [Copilot in Excel FAQ](https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel), [Microsoft 365 AI credits](https://support.microsoft.com/en-gb/office/ai-credits-and-limits-for-microsoft-365-personal-family-and-premium-68530f1a-4459-4d02-9818-8233c1f673b8), [Gemini in Google Sheets](https://support.google.com/docs/answer/14356410), [AI function in Google Sheets](https://support.google.com/docs/answer/15877199), [ChatGPT pricing](https://openai.com/chatgpt/pricing/), [Julius pricing](https://julius.ai/pricing).

More analysis tools are in the [data and analytics directory](/tools/category/data-analytics/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
