import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pk-test.posnet.com/');
  await page.goto('https://pk-test.posnet.com/login');
  await page.getByPlaceholder('Wpisz e-mail...').click();
  await page.getByPlaceholder('Wpisz e-mail...').fill('m.wrzesisnski2posnet.com');
  await page.getByPlaceholder('Wpisz hasło...').click();
  await page.getByPlaceholder('Wpisz hasło...').click();
  await page.getByPlaceholder('Wpisz hasło...').fill('B)d^rE"`/{&D\',EQFo(j1');
  await page.getByRole('button', { name: 'Zaloguj się' }).click();
  await page.getByText('E-mailNieprawidłowe dane logowania!Hasło użytkownika Nie pamiętasz hasła?Hasło n').click();
  await page.getByPlaceholder('Wpisz hasło...').click();
  await page.getByPlaceholder('Wpisz hasło...').fill('');
  await page.getByPlaceholder('Wpisz e-mail...').click();
  await page.getByPlaceholder('Wpisz e-mail...').fill('m.wrzesim');
  await page.getByPlaceholder('Wpisz e-mail...').press('ArrowRight');
  await page.getByPlaceholder('Wpisz e-mail...').press('ArrowRight');
  await page.getByPlaceholder('Wpisz e-mail...').fill('m.wrzesinski@posnet.com');
  await page.getByPlaceholder('Wpisz hasło...').click();
  await page.getByPlaceholder('Wpisz hasło...').click();
  await page.getByPlaceholder('Wpisz hasło...').fill('B)d^rE"`/{&D\',EQFo(j1');
  await page.getByRole('button', { name: 'Zaloguj się' }).click();
});