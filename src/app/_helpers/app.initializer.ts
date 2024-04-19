import { AccountService } from '@app/_service';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        accountService.refreshToken()
        .subscribe()
        .add(resolve);

    });
}