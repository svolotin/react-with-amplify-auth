import { AuthEventData } from "@aws-amplify/ui";
import { AuthUser } from "aws-amplify/auth";
import { Button, Text, View } from "@aws-amplify/ui-react";


type AppProps = {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
  user: AuthUser | undefined;
};

export default function NavBar({ signOut, user }: AppProps) {
  return (
    <header className="relative ...">
      {user && (
        <View>
          <Text>Hello {user.username}</Text>
          <Button className="absolute bottom-0 right-0 ... " onClick={signOut}>
            <Text>Sign Out</Text>
          </Button>
        </View>
      )}
    </header>
  );
}
