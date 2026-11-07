# preview2.vovazakharov.com

The second preview slot for
[vzakharov/vovazakharov.com](https://github.com/vzakharov/vovazakharov.com):
[preview2.vovazakharov.com](https://preview2.vovazakharov.com) serves whichever
of its sites a branch last published here, so a pull request can be looked at
on a real host before it merges — beside the first slot,
[preview.vovazakharov.com](https://preview.vovazakharov.com), so two branches
can be up at once. There is no source here, and nothing in this repository is
written by hand.

The `gh-pages` branch is built and force-pushed by the source repository's
`preview.yml` workflow, dispatched by hand with `slot=2` for one site from any
ref. Pages here is set to deploy from that branch, so the push _is_ the deploy —
nothing runs on this side. The branch keeps no history: it is a single commit,
replaced on every publish, whose message names the site and the source commit
it was built from.

The slot is not indexed — every publish writes a `robots.txt` disallowing all of
it — and canonical links on its pages point at the production sites.
