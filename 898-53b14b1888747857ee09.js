"use strict";
(self.webpackChunkvenom_dolls = self.webpackChunkvenom_dolls || []).push([
  [898],
  {
    6898: function (e, r, t) {
      t.r(r),
        t.d(r, {
          lazyHydrate: function () {
            return c;
          },
        });
      var o = t(396),
        n = t(7294),
        a = t(3935),
        i =
          (t(1056),
          t(2369),
          [
            "image",
            "loading",
            "isLoading",
            "isLoaded",
            "toggleIsLoaded",
            "ref",
            "imgClassName",
            "imgStyle",
            "objectPosition",
            "backgroundColor",
            "objectFit",
          ]);
      function c(e, r, t, c) {
        var d = e.image,
          l = e.loading,
          u = e.isLoading,
          g = e.isLoaded,
          s = e.toggleIsLoaded,
          m = e.ref,
          h = e.imgClassName,
          b = e.imgStyle,
          f = void 0 === b ? {} : b,
          k = e.objectPosition,
          v = e.backgroundColor,
          y = e.objectFit,
          C = void 0 === y ? "cover" : y,
          L = (0, o._)(e, i),
          j = d.width,
          w = d.height,
          p = d.layout,
          N = d.images,
          P = d.placeholder,
          E = d.backgroundColor,
          F = JSON.stringify(N);
        f = (0, o.a)(
          { objectFit: C, objectPosition: k, backgroundColor: v },
          f
        );
        var R = n.createElement(
          o.L,
          { layout: p, width: j, height: w },
          n.createElement(o.P, (0, o.a)({}, (0, o.g)(P, g, p, j, w, E, C, k))),
          n.createElement(
            o.M,
            (0, o.a)(
              {},
              L,
              { width: j, height: w, className: h },
              (0, o.b)(u, g, N, l, s, F, m, f)
            )
          )
        );
        return (
          r.current &&
            (a.createRoot
              ? (t.current || (t.current = a.createRoot(r.current)),
                t.current.render(R))
              : ((t.current || c.current ? a.render : a.hydrate)(R, r.current),
                (t.current = !0))),
          function () {
            r.current &&
              (a.createRoot
                ? t.current.render(null)
                : a.render(null, r.current));
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=898-53b14b1888747857ee09.js.map
