import { expect, test } from '@playwright/test';

const moduleIds = [
  'ssc-pve-4010',
  'ssc-wsh-4008',
  'ssc-pdv-4045',
  'ssc-cfc-4047',
  'ssc-bin-4010',
  'ssc-pmt-4022',
  'ssc-pmt-5022',
  'ssc-pmt-4024',
  'ssc-pol-4005',
];

test.describe('journal routes', () => {
  for (const moduleId of moduleIds) {
    test(`${moduleId} renders without console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          consoleErrors.push(message.text());
        }
      });

      await page.goto(`/journals/${moduleId}`);
      await expect(page.getByRole('heading', { name: 'Candidate Information' })).toBeVisible();
      expect(consoleErrors).toEqual([]);
    });
  }
});

test('sidebar lists M1-M9 and navigates to M9', async ({ page, isMobile }) => {
  await page.goto('/journals/ssc-pve-4010');
  if (isMobile) {
    await page.getByRole('button', { name: 'Toggle sidebar' }).click();
  }

  for (const moduleNumber of ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9']) {
    await expect(page.getByRole('button', { name: new RegExp(moduleNumber) }).first()).toBeVisible();
  }

  await page.getByRole('button', { name: /M9/ }).click();
  await expect(page).toHaveURL(/\/journals\/ssc-pol-4005/);
  await expect(page.getByRole('heading', { name: 'Candidate Information' })).toBeVisible();
});

test('prev and next navigate through sections', async ({ page }) => {
  await page.goto('/journals/ssc-pmt-4022');

  await page.getByRole('button', { name: 'Next section' }).click();
  await expect(page.getByRole('heading', { name: /LO1: Conduct needs assessment/i })).toBeVisible();

  await page.getByRole('button', { name: 'Previous section' }).click();
  await expect(page.getByRole('heading', { name: 'Candidate Information' })).toBeVisible();
});

test('search finds M8 stakeholder content and navigates to the section', async ({ page }) => {
  await page.goto('/journals/ssc-pmt-4024');

  await page.getByPlaceholder('Search journal...').fill('stakeholder support');
  await expect(page.getByText(/result/i).first()).toBeVisible();
  await page.getByRole('button', { name: /Knowledge \(K4\)/i }).first().click();

  await expect(page.getByText(/Methods to build community stakeholder support/i)).toBeVisible();
});

test('M9 renders a structured risk table and exposes source PDF download', async ({ page }) => {
  await page.goto('/journals/ssc-pol-4005');

  await page.getByRole('button', { name: 'Next section' }).click();
  await page.getByRole('button', { name: 'Next section' }).click();
  await expect(page.getByText('Risk Management - Assessment and Response Strategy')).toBeVisible();
  await expect(page.getByRole('table').filter({ hasText: 'Cost of baking ingredients' })).toBeVisible();

  await page.getByRole('button', { name: 'Open download options' }).click();
  const pdfLink = page.getByRole('link', { name: /Original M9 reflective journal PDF/i });
  await expect(pdfLink).toHaveAttribute(
    'href',
    '/assets/M9-SSC-POL-4005-1.1-Social-Policy-Implementation-RJ.pdf'
  );
});

test('mobile sidebar opens and shows new modules', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile-only coverage');

  await page.goto('/journals/ssc-pmt-5022');
  await page.getByRole('button', { name: 'Toggle sidebar' }).click();
  await expect(page.getByRole('button', { name: /M6/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /M9/ })).toBeVisible();
});
