
interface userCredentials {
    username: string;
    password: string;
};

export const loginUser = async (props: userCredentials) => {
    const {username, password} = props;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve({
            success: true,
            data: {
              username,
              email: "admin@cavidev.com",
              token:
                "longTokenIdWithOtherLeterssopjZzmPfWUAH9Ab018c84e3PKkMWk9CY9VmrXcZm3DuWFWGj415lDICV2g7gx8m",
            },
          });
        } else {
          reject({ success: false, error: "Invalid credentials." });
        }
      }, 2000);
    });
  };