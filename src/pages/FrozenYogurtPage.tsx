import { NavLink } from "react-router-dom";

export const FrozenYogurtPage = () => <>
    <p>
        A Flutter wealth-and-shopping companion that lets a single signed-in user record cash, bank, and stock holdings while managing a smart shopping list. Data stays local in an SQLite database, and Provider-
        powered ChangeNotifiers keep the feature-first UI responsive offline.
    </p>
    <p>
        <NavLink to="/fy-privacy-policy">
            See Privacy Policy
        </NavLink>
    </p>
    <p>
        App is in beta, will be released soon.
    </p>
</>