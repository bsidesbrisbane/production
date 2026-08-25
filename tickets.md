---
layout: page
title: Tickets
permalink: /tickets/
flag: tickets
---

<style>
.ms-form-wrapper {
    position: relative;
    width: 100%;
    margin: 2em 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(6, 3, 30, 0.3);
    border: 2px solid #D4A017;
}

.ms-form-wrapper iframe {
    display: block;
    width: 100%;
    border: none;
    background-color: #0B0A09;
    filter: brightness(0.95) contrast(1.05) saturate(1.1);
}

.ms-form-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #D4A017, #C9BDAA, #1A1612);
    z-index: 1;
    pointer-events: none;
}

@media (max-width: 768px) {
    .ms-form-wrapper {
        border-radius: 4px;
        border-width: 1px;
    }
}
</style>

## Buy Tickets

<script src="https://events.humanitix.com/scripts/widgets/inline.js" type="module"></script>
<div class="ms-form-wrapper">
<iframe data-checkout="bsides-brisbane-2026"></iframe>
</div>