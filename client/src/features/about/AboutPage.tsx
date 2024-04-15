import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
    const [errors, setErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.Buggy.getValidationError()
            .then(_ => console.log('You should not see this message'))
            .catch(error => setErrors(error))
    }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>Error Testing</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.Buggy.get400Error().catch(error => console.log(error))}>get 400 Error</Button>
                <Button variant="contained" onClick={() => agent.Buggy.get401Error().catch(error => console.log(error))}>get 401 Error</Button>
                <Button variant="contained" onClick={() => agent.Buggy.get404Error().catch(error => console.log(error))}>get 404 Error</Button>
                <Button variant="contained" onClick={() => agent.Buggy.get500Error().catch(error => console.log(error))}>get 500 Error</Button>
                <Button variant="contained" onClick={getValidationError}>get Validation Error</Button>
            </ButtonGroup>
            {
                errors.length > 0 &&
                <Alert severity="error">
                    <AlertTitle>Validation Erros</AlertTitle>
                    <List>
                        {errors.map(error => (
                            <ListItem key={error}>{error}</ListItem>
                        ))}
                    </List>
                </Alert>

            }

        </Container>
    );
}