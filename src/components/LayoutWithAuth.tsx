import { ReactNode } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";

interface AuxProps {
  children: ReactNode;
}

/**
 * Configuration of Amplify login component
 * see https://ui.docs.amplify.aws/react/connected-components/authenticator/customization
 */
const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
    },
  },
  confirmVerifyUser: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

/**
 * Attempt to create an easily unit testable codebase with loosely coupled components
 * see https://medium.com/@vitorbritto/react-design-patterns-layout-components-pattern-455c98e0bf92
 */
const LayoutWithAuth = ({ children }: AuxProps) => {
  return (
    <Authenticator formFields={formFields} hideSignUp={true}>
      {({ signOut, user }) => (
        <main>
          <NavBar signOut={signOut} user={user}></NavBar>
          {children}
        </main>
      )}
    </Authenticator>
  );
};

export default LayoutWithAuth;
